import './posts_style.css';

import Photo1 from '../../assets/photo1.png';
import Image1 from '../../assets//image1.png';

import Photo2 from '../../assets/photo2.png';
import Image2 from '../../assets//image2.png';

const PROFILE_IMAGE1 = Photo1;
const CONTENT_IMAGE1 = Image1;

const PROFILE_IMAGE2 = Photo2;
const CONTENT_IMAGE2 = Image2;

export const user1 = {
 author: {
   photo: PROFILE_IMAGE1,
   name: 'Charlie Kelly',
   nickname: "@charlie_kelly"
  },
  date: new Date(),
  content: 'Це я намагаюсь розібратись в графіках відключення світла',
  image: CONTENT_IMAGE1,
};

export const user2 = {
  author: {
    photo: PROFILE_IMAGE2,
    name: 'Jim Helpert',
    nickname: "@jim_help"
   },
   date: new Date(),
   content: '"Нова Пошта" спостерігає за тим, як ЗСУ звільняють міста',
   image: CONTENT_IMAGE2,
 };
