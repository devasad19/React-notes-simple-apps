import React, {Component, createContext} from 'react';

export const NoteContext = createContext();

export class NoteProvider extends Component{

    state = {
        notes: [
             {
                 id: 1,
                 title: 'note title 1',
                 description: 'description 1'
             },
             {
                 id: 2,
                 title: 'note title 2',
                 description: 'description 2'
             },
             {
                 id: 3,
                 title: 'note title 3',
                 description: 'description 3'
             }
         ]
     }
 
     addNote = note =>{
         this.setState({
             notes: [...this.state.notes, note]
         });
     };

     removeNote = id =>{
         this.setState({
             notes: this.state.notes.filter(note => note.id !== id)
         });
     };

    render(){
        return(
             <NoteContext.Provider value={{
                   notes: this.state.notes,
                   addNote: this.addNote,
                   removeNote: this.removeNote
                }}>
                    
                {this.props.children}
             </NoteContext.Provider>
        )
    }

}