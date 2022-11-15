import './App.css';
import './components/contactsPage/contacts.css'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage  from './components/mainPage/main_page'
import Gallery from './components/photosPage/photos_page'
import Contacts from './components/contactsPage/contacts'
import PostPage from './components/postsPage/post'
import Navigation from './components/nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='navigation'>
      <Navigation/>
      </div>
      
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
          <MainPage/>
          </Route>

          <Route path='/photos'>
          <Gallery/>
          </Route>

          <Route path='/contacts'>
          <Contacts />
            </Route>

            <Route path='/posts'>
          <PostPage />
            </Route>
  
          </Switch>
     
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
