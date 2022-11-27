import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div className='nav'>

        <ul>
          <li><a href="/react-spa/#/">MAIN</a></li>
          <li><a href="/react-spa/#posts">POSTS</a></li>
          <li><a href="/react-spa/#photos">PHOTOS</a></li>
          <li><a href="/react-spa/#contacts">CONTACTS</a></li>
        </ul>

      </div>
    )
  }
}
