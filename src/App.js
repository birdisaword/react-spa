import './App.css';
import './components/contactsPage/contacts.css'
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import MainPage  from './components/mainPage/main_page'
import Gallery from './components/photosPage/photos_page'
import Contacts from './components/contactsPage/contacts'
import PostPage from './components/postsPage/post'
import Navigation from './components/nav'

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
