import React, { Component } from 'react';
import {photos_style} from './photos_style.css'
import {imgUrls} from './photo_data'

 const GalleryList = (props) => {
   const list = props.images.map(image =>
   <li key={image.id} className='gallery_item'>
    <img src={image.url} alt='img'/> 
   </li>               
   )
   return(
      <ul className='gallery_ul'> {list} </ul>);
 }

 export default class Gallery extends Component{
   state = {
    images: imgUrls 
   }

   render() {
    const {images }= this.state;

     return(
     <div>
         <div className='gallery_wrapper'>
         <GalleryList images={images} />
         </div> 
     </div>
     )
   }
 }