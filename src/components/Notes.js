import React, {Component} from 'react';
import Note from './Note';
import {NoteContext} from './context/Note.context';



class Notes extends Component {
    static contextType = NoteContext;
    
    render(){
        const {notes} = this.context;

        return(
            <div>
            <h3 className="mb-5 mt-3">Note List</h3>
                {notes.map( note => 
                    <Note key={note.id} note={note} removeNote={this.props.removeNote}/>
                 )}
                 
            </div>
        )
    }

}

export default Notes;