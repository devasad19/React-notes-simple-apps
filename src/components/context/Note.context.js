import React, {useState, createContext, useEffect} from 'react';
import axios from 'axios';

export const NoteContext = createContext();

export const NoteProvider = (props) => {
   const[notes, setNotes] = useState([
        {
            id: 1,
            title: 'this is the tiele 1',
            description: 'description 1'
        },
        
        {
            id: 2,
            title: 'this is the tiele 2',
            description: 'description 2'
        },
        
        {
            id: 3,
            title: 'this is the tiele 3',
            description: 'description 3'
        }
    ]);
 
    // API Section

    useEffect(() => {
        const runAsyncCode = async() => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
                const {data} = res;
                setNotes(data);
            }catch(e){
                console.log(e);
            }
        }
        runAsyncCode();
    }, []);  // here [] means useEffect method call onece

     const addNote = note =>{
        setNotes([...notes, note]);
     };

    const removeNote = id =>{
        setNotes([...notes.filter(note => note.id !== id)]);
     };

    return(
            <NoteContext.Provider value={{
                notes: notes,
                addNote: addNote,
                removeNote: removeNote
            }}>
                
            {props.children}
            </NoteContext.Provider>
    )

}