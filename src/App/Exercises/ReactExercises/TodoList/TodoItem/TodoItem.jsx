import './todoitem.css';
import { useState } from 'react';
import { TrashbinIcon } from '../../../../Components/Icons/TrashbinIcon';
import { requestHandler } from '../requestHandler';
import { TodoStatus } from '../TodoStatus/TodoStatus';

const parseDate = (date) => {
  if (date) {
    const dateObj = new Date(date);
    return dateObj.toISOString().split('T')[0];
  } else {
    return date;
  }
};

export const TodoItem = ({
  author,
  createdAt,
  doneDate,
  id,
  isDone,
  note,
  title,
  getTodos,
  setEditObject,
  setShowCreateForm,
}) => {
  const [deleteError, setDeleteError] = useState('');

  const deleTodo = async (selectedId) => {
    requestHandler('DELETE', selectedId)
      .then(() => {
        getTodos();
      })
      .catch(() => {
        setDeleteError('Nie udało się usunąć');
      });
    // const response = await
    //     fetch(`http://localhost:3333/api/todo/${selectedId}`, { method: 'DELETE'});
    // const getJsonData = await response.json();

    // if (response.status === 200) {
    //     TodoList();
    // }

    // if (response.status !==200 && getJsonData.message) {
    //     setError(getJsonData.message);
    //   }
    // console.log(response);
  };

  const [markAsDoneError, setMarkAsDoneError] = useState('');

  const markAsDone = async () => {
    setMarkAsDoneError(''); // w tym miejscu czyścimy błędy WAŻNE! inaczej byłby bug i po error i po ponownym kliknięciu check-icon kolor zostałby czerwony
    requestHandler('PUT', `${id}/markAsDone`)
      .then(() => {
        getTodos();
      })
      .catch(() => {
        setMarkAsDoneError('Nie udało się ukończyć');
      });
  };

  //     //https://kursjs.pl/kurs/ajax/fetch spr.!!!!!!

  return (
    <div className="todo-list">
      <div className="todo-list-content">
        <div className="todo-title">{title}</div>
        <div className="todo-author">Author: {author}</div>
        <div className="todo-createdAt">Created at: {parseDate(createdAt)}</div>
        <br />
        <div className="todo-note">Note: {note}</div>
      </div>
      <hr />

      <div className="todo-is-done">
        <button className="todo-trashbin-icon" onClick={() => deleTodo(id)}>
          &#x1F5D1;
        </button>
        {/* <button onClick={() => {deleTodo(id);}}><TrashbinIcon /></button> */}

        <button
          className="todo-edit-icon"
          onClick={() => {
            setShowCreateForm(true);
            setEditObject({ id: id, title: title, author: author, note: note });
          }}
        >
          &#9998;
        </button>

        <div className="delete-error">{deleteError}</div>
        <TodoStatus
          isDone={isDone}
          isDoneDate={parseDate(doneDate)}
          markAsDone={markAsDone}
          markAsDoneError={markAsDoneError}
        />
        {/* { isDone &&
                <>
                    <div className="todo-check-done">&#10004;</div>
                    <div className='todo-done-date'>{parseDate(doneDate)}</div>
                </>} */}
      </div>
    </div>
  );
};
