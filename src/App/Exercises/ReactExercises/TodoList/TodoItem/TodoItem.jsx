import './todoitem.css';
import { useState } from 'react';
import { TrashbinIcon } from '../../../../Components/Icons/TrashbinIcon';
import { requestHandler } from '../requestHandler';


const parseDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toDateString();
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
     
}) => {

    const [deleteError, setDeleteError] = useState('');

    const deleTodo = async (selectedId) => {

        requestHandler('DELETE', selectedId)
            .then(() => {
                getTodos();
            })
            .catch((errorMessage) => {
                setDeleteError(errorMessage);
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
    }
    
     
    //     //https://kursjs.pl/kurs/ajax/fetch spr.!!!!!!     
        

    return (
        <div className='todo-list'> 

            <div className='todo-list-content'>
                
                <div className='todo-title'>{title}</div>
                <div className='todo-author'>Author: {author}</div>
                <div className='todo-createdAt'>Created at: {parseDate(createdAt)}</div>
                <br />
                <div className='todo-note'>Note: {note}</div>
                </div>
                <hr />
                
            <div className='todo-is-done'>
                
                <div className='todo-trashbin-icon'>                    
                    <TrashbinIcon onClick={() => deleTodo(id)}/>
                </div>
                {/* <button onClick={() => {deleTodo(id);}}><TrashbinIcon /></button> */}
            <div className='delete-error'>{deleteError}</div>
            { isDone &&
                <>
                    <div className="todo-check-done">&#10004;</div>
                    <div className='todo-done-date'>{parseDate(doneDate)}</div>
                </>}
            </div>
          
        </div>

      )
}

