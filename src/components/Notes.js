import React, {useContext} from 'react';
import Note from './Note';
import {NoteContext} from './context/Note.context';



const Notes = () => {
    const context = useContext(NoteContext);
 
    const {notes} = context;

    return(
        <div>
        <h3 className="mb-5 mt-3">Note List</h3>
            {notes.map( note => 
                <Note key={note.id} note={note} />
                )}
                
        </div>
    )
}

export default Notes;