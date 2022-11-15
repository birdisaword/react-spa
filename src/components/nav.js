import React from 'react';
import { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
     
        <ul>
          <li><a href="/">MAIN</a></li>
          <li><a href="/posts">POSTS</a></li>
          <li><a href="/photos">PHOTOS</a></li>
          <li><a href="/contacts">CONTACTS</a></li>
        </ul>

      </div>
    )
  }
}
