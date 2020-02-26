import React, { Component } from 'react';
import { NoteContext } from './context/Note.context';
import axios from 'axios';
class Note extends Component {

    static contextType = NoteContext;
    handleRemove = async id => {
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
            this.context.removeNote(id);
        }catch(e){
            console.log(e);
        }
    }

    render(){
        const {id, name: title, body: description } = this.props.note;
    
        return (
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-secondary" onClick={() => this.handleRemove(id)}>remove</button>
                </div>
            </div>
        )
    }


}

export default Note;