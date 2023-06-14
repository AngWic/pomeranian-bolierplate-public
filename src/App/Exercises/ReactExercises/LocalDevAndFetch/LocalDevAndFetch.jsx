import { useEffect, useState } from 'react';
import './styles.css';


const loadingMessage = () => {
  alert('loading...');
};
loadingMessage();

export const LocalDevAndFetch = () => {
  const [todos, setTodos] = useState([]);
  // const [error, setError] = useState();
  
  async function getTodos() {
  const response = await fetch('http://localhost:3333/api/todo');
  const getJsonData = await response.json();
  console.log(todos);    
  
  //   if (getJsonData.message) {
  //     setError(getJsonData.message);
  //   } else {
      setTodos(getJsonData);
  //  }
  };

  useEffect(() => {
    getTodos();
  }, []);

  
  return <div><h3>Local dev and fetch</h3>
  
    {todos.map(( {title, note, id}) => {
      return (
        <div className='todo-list' key={id}> What to do?
        <hr />
          <p className='todo-title'>{title}</p>
          <p className='todo-note'>Note: {note}</p>
          </div>
      )
    })}
  </div>;
};
