import { useEffect, useState } from 'react';
import './styles.css';
import { TodoItem } from './TodoItem/TodoItem';


function CatErrorImg() {
  return (
    <div style={{margin: '50px'}}>
      <img src="https://http.cat/images/500.jpg" alt="internal server error cat" style={{width: '500px'}}/>
    </div>
  );
}
export default CatErrorImg;

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  
  async function getTodos() {

  setIsLoading(true);

  //tutaj jesteśmy, zanim zostanie wysłane zapytanie o dane
  const response = await fetch('http://localhost:3333/api/todo');
  const getJsonData = await response.json();
  console.log(todos);  
  
  
  
  //tutaj jesteśmy, gdy otrzymujemy dane

  if (response.status === 200) {
    setTodos(getJsonData);
  } 
  
  if (response.status !==200 && getJsonData.message) {
    setError(getJsonData.message);
  }
  
  // if (getJsonData.message) {
  //     setError(getJsonData.message);
  //   } else {
  //     setTodos(getJsonData);
      
  //  }

  setIsLoading(false);
  };

  

  useEffect(() => {
    getTodos();
  }, []);

  
  return <div><h3>TODO</h3>

    {error && (<h1>Oh-o! Something went wrong...
      <br />
      {error}
      <br />
      <button className='todo-list-button' onClick={() => {
        //gdy kliknięty...
        setError(false);
        getTodos();        
      }}>
        Try again
      </button>

      <CatErrorImg />
      
    </h1>
      )}

    {isLoading && <p>Ładowanie...</p>}
  
    {!error && 
      todos.map(( {author, createdAt, doneDate, id, isDone, note, title}) => {
      return (
        <TodoItem
        key={id} 
        author={author}
        createdAt={createdAt}
        doneDate={doneDate}
        id={id}
        isDone={isDone}
        note={note}
        title={title}
        />
      )
    })}
  </div>;
};
