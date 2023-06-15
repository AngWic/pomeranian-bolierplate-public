import './todoitem.css';
import { TrashbinIcon } from '../../../../Components/Icons/TrashbinIcon';


const parseDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toDateString();
};




export const TodoItem = ({ author, createdAt, doneDate, id, isDone, note, title }) => {

    const deleTodo = (id) => {
        fetch('http://localhost:3333/api/todo', { method: 'DELETE'});
        //https://kursjs.pl/kurs/ajax/fetch spr.!!!!!!     
        
    }

    return (
        <div className='todo-list'> 

        <h3 className='todo-lidt-header'>What to do?</h3>
        <hr />
            <div className='todo-list-content'>
                
                <div className='todo-title'>{title}</div>
                <div className='todo-author'>Author: {author}</div>
                <div className='todo-createdAt'>Created at: {parseDate(createdAt)}</div>
                <br />
                <div className='todo-note'>Note: {note}</div>
                </div>
                
            <div className='todo-is-done'>
                <div><TrashbinIcon onClick={() => deleTodo()}/></div>
            { isDone &&
                <>
                    <div className="todo-check-done">&#10004;</div>
                    <div className='todo-done-date'>{parseDate(doneDate)}</div>
                </>}
            </div>
          
        </div>

      )
}

