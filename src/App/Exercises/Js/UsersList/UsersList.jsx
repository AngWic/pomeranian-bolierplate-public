import { useState } from 'react';
import './styles.css';

export function UsersList() {
  const [inputValue, setInputValue] = useState('');

  const [users, setUsers] = useState(
    JSON.parse(window.localStorage.getItem('name')) || []
  );
  // do useState zamiast osobno: useEffect(() => {
  // setUsers(JSON.parse(window.localStorage.getItem('users'))) || [] ...
  //w celu zachowania danych z Local Storage zapisanych po odświeżeniu przeglądarki

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const sendFormValue = () => {
    setUsers((prevState) => [
      ...prevState,
      { id: users.length + 1, name: inputValue },
    ]);
    //[...prevState, { name: inputValue }]); <<< dodawanie nowych elementów do istniejących >> ...X <<
    setInputValue('');
  };

  // const removeValue = (id) => {
  //   setUsers((currentState) => currentState.filter((item) => item.id !== id));
  // };

  const sendValuesToStorage = () => {
    window.localStorage.setItem('name', JSON.stringify(users)); //JSON.stringify == konwersja danych do stringa, ważne, żeby to dopisać!!
  };

  return (
    <div className="users-list">
      <div className="users-list-input-wrapper">
        <div className="users-list-input">
          <div>NICK</div>
          <input
            type="text"
            placeholder="jaras_2000"
            onChange={changeInputValue}
            value={inputValue}
            name="Nick input"
          />
        </div>
        <button
          className="users-list-button"
          onClick={sendFormValue}
          // disabled={inputValue.length === 0 || false}
          //to samo co: inputValue.length === 0 ? true : false
          //to samo co:
          disabled={!inputValue.length}
        >
          DODAJ
        </button>
      </div>
      <div className="users-list-list-wrapper">
        {users.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
        <hr />
        <button onClick={sendValuesToStorage}>Send to storage</button>
      </div>
    </div>
  );
}
