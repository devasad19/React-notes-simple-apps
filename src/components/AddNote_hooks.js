import React, {useState, useContext} from 'react';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { NoteContext } from './context/Note.context';
import axios from 'axios';
// import AddNote from './AddNote';


const AddNote = (props) =>{
    const context = useContext(NoteContext);
    const[note, setNote] = useState({
        id: uuid(),
        title: '',
        description: ''
    });
const[errors, setErrors] = useState({});

   const handleChange = e => {
        setNote({
            ...note,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e =>{
        e.preventDefault();
        if(note.title === ''){
            setErrors({
                    ...errors,
                    title: 'Please provite title'
                });
            return; 
        }

        if(note.description === ''){
           setErrors({
                    ...errors,
                    title : '',
                    description: 'Please provite description'
                });
            return;
        }

        try{
            const res = await axios.post('https://jsonplaceholder.typicode.com/comments', {
                name: note.title,
                body : note.description
            });
    
            const {data} = res
            context.addNote(data);
            props.history.push('/')
        }catch(e){
            console.log(e);
        }

    };

    return(
        <div className="card mt-5 mb-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          name="title"
                          value={note.title}
                          onChange = {handleChange}
                          className={classNames('form-control', !!errors.title && 'is-invalid')}
                        />
                        <div className="invalid-feedback">Title must be required</div>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                         name="description"
                         value ={note.description}
                         onChange = {handleChange}
                         className={classNames('form-control', !!errors.description && 'is-invalid')}>

                        </textarea>
                        <div className="invalid-feedback">Description must be required</div>
                    </div>
                    <button className="btn btn-secondary">Submit</button>

                 </form>
            </div>
        </div>
    )

}


export default AddNote;