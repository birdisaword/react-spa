import './App.css';
import './components/contactsPage/contacts.css'
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import MainPage  from './components/mainPage/MainPage'
import Gallery from './components/photosPage/PhotosPage'
import Contacts from './components/contactsPage/Contacts'
import PostPage from './components/postsPage/PostsPage'
import Navigation from './components/Nav'

function App() {
  return ( 
     <HashRouter>
    <div className="App">
      <header className="App-header">
    
      <div className='navigation'>
      <Navigation/>
      </div>
      
         <Switch>
          <Route path='/' component={MainPage} exact />
          <Route path='/photos' component={ Gallery} exact/>
          <Route path='/contacts' component={Contacts } exact/>
          <Route path='/posts' component={PostPage} exact/>
        </Switch>
      </header>
    </div>
    
     </HashRouter>
  );
}

export default App;
