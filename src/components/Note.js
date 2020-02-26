import React, { useContext } from 'react';
import { NoteContext } from './context/Note.context';
import axios from 'axios';

const Note = (props) => {
    const context = useContext(NoteContext);
    const {removeNote} = context;

    const handleRemove = async id => {
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
           removeNote(id);
        }catch(e){
            console.log(e);
        }
    }

 
        const {id, name: title, body: description } = props.note;
    
        return (
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-secondary" onClick={() => handleRemove(id)}>remove</button>
                </div>
            </div>
        )

}

export default Note;