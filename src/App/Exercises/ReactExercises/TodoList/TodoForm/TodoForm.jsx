import './todoform.css';
import { requestHandler } from '../requestHandler';



export const TodoForm = ({ hide }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        requestHandler('POST', undefined, {
            title: e.target.title.value,
            author: e.target.author.value,
            note: e.target.note.value,
        })
        .then((jsonResponse) => {
        console.log(jsonResponse);
        })
        .catch((errorMessage) => {
        console.log(errorMessage);
        });

    };
    


    return <div className="todo-form">
        Dodawanie zadania
        <hr />
        <div className="todo-form-back" onClick={() => hide(false)}>&#8592;Wstecz</div>
        <form onSubmit={handleSubmit}>
            <h4>Tytuł:</h4>
            <input placeholder='Kupić parasol na balkon...' name='title' type='text'/><br />
            <h4>Autor:</h4>
            <input placeholder='Wojtek...' name='author' type='text'/><br />
            <h4>Treść:</h4>
            <textarea 
            placeholder='Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!...' 
            name='note' 
            type='text'/><br />
            <button type="submit">Dodaj</button>
        </form>
        </div>
}