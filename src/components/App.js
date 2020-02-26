import React , {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import AddNote from './AddNote';
import About from './About';
import NotFound from './NotFound';
import { NoteProvider } from './context/Note.context';
import { Route, Switch } from 'react-router-dom';

class App extends Component{


    render(){
        return(
            <div className='container'>
                <Header />
                    <NoteProvider>
                        <Switch>    
                                <Route path='/' exact component={Notes} />
                                <Route path='/add-note' component={AddNote} />
                                <Route path='/about-us' component={About}/>
                                <Route component={NotFound} />
                        </Switch>
                    </NoteProvider>
                <Footer />
            </div>
        );
    }
}

export default App;