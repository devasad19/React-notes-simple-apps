import React, {Component, createContext} from 'react';
import axios from 'axios';


export const NoteContext = createContext();
export class NoteProvider extends Component{

    state = {
        notes: [ ]
     }
 
    // API Section
async componentDidMount(){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        const {data} = res;
        this.setState({
            notes: data
        });
    }catch(e){
        console.log(e);
    }
}



    //  componentDidMount(){
    //      axios.get('https://jsonplaceholder.typicode.com/comments').then( res => 
    //         console.log(res)
    //      )
    //  }

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