import './todoform.css';
import { useState } from 'react';

import { requestHandler } from '../requestHandler';

export const TodoForm = ({ hide, getTodos, editObject, setEditObject }) => {
  const isEditMode = Boolean(editObject);

  const [message, setMessage] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const [title, setTitle] = useState(isEditMode ? editObject.title : '');
  const [author, setAuthor] = useState(isEditMode ? editObject.author : '');
  const [note, setNote] = useState(isEditMode ? editObject.note : '');

  // console.log(title);
  // console.log(author);
  // console.log(note);

  // console.log('showPopup', showPopup);

  const createNewTodo = async () => {
    requestHandler('POST', undefined, {
      title: title,
      author: author,
      note: note,
    })
      .then((response) => {
        // console.log(response);
        setMessage(`Dodano nowe zadanie do listy: "${response.title}"`); //pokazać, że dodano nowego todo
      })
      .catch((errorMessage) => {
        setMessage(
          'Coś poszło nie tak, spróbuj ponownie. Błąd: ' + errorMessage
        );
      });
  };

  const editTodo = async () => {
    requestHandler('PUT', editObject.id, {
      title: title,
      author: author,
      note: note,
    })
      .then((response) => {
        // console.log(response);
        setMessage(`Edytowano zadanie z listy: "${response.title}"`);
      })
      .catch((errorMessage) => {
        setMessage('Wystąpił błąd, spróbuj ponownie. Błąd: ' + errorMessage);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //domyślnie formularz odświeża(przeładowuj) stronę i dodaje parametry do adresu strony, a w React potrzebujemy tego narzędzia do dynamicznego zmieniania aplikacji

    if (title !== '' && author.length > 0 && note === '') {
      setShowPopup(true);
    }

    if (title !== '' && author.length !== '' && note !== '') {
      if (isEditMode) {
        editTodo();
      } else {
        createNewTodo();
      }
    }
  };

  function backToTodoList() {
    hide(false);
    getTodos();
    setEditObject();
  }

  return (
    <div className="todo-form">
      <div className="todo-form-back" onClick={() => backToTodoList()}>
        &#8592;Wstecz
      </div>

      <hr />

      <h3>Dodawanie zadania</h3>

      {message && <span className="form-message-box">{message}</span>}

      <form onSubmit={handleSubmit}>
        <h4>Tytuł:</h4>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          //   placeholder="Kupić parasol na balkon..."
          type="text"
        />
        <br />
        <h4>Autor:</h4>
        <input
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
          //   placeholder="Wojtek..."
          type="text"
        />
        <br />
        <h4>Treść:</h4>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          //   placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!..."
          type="text"
          cols={50}
          rows={10}
        />
        <br />

        <button className="todo-button-add" type="submit">
          {isEditMode ? 'Zapisz' : 'Dodaj'}
        </button>

        <hr />
      </form>

      {showPopup && (
        <div className="todo-form-popup">
          <div className="todo-form-popup-content">
            <div>Czy chcesz dodać zadanie bez treści?</div>
            <br />
            <button
              onClick={() => {
                createNewTodo();
                setShowPopup(false);
              }}
            >
              Tak
            </button>
            <button onClick={() => setShowPopup(false)}>Nie</button>
          </div>
        </div>
      )}
    </div>
  );
};
