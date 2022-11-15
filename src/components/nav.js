import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
     
     {/* <ul>
            <li><NavLink to="#/">MAIN</NavLink></li>
            <li><NavLink to="#/posts">POSTS</NavLink></li>
            <li><NavLink to="#/photos">PHOTOS</NavLink></li>
             <li><NavLink to="#/contacts">CONTACTS</NavLink></li>
          </ul> */}

        <ul>
          <li><a href="/">MAIN</a></li>
          <li><a href="/#posts">POSTS</a></li>
          <li><a href="/#photos">PHOTOS</a></li>
          <li><a href="/#contacts">CONTACTS</a></li>
        </ul>

      </div>
    )
  }
}
