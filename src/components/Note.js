import React, { Component } from 'react';
import { NoteContext } from './context/Note.context';
class Note extends Component {

    static contextType = NoteContext;
    handleRemove = (id) => {
        this.context.removeNote(id);
    }

    render(){
        const {id, title, description } = this.props.note;
    
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