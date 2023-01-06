import './posts_style.css';
import Post from './Post';
import { user2 } from './posts_info'
import { user1 } from './posts_info'


function PostPage() {

  return (
  <div className="App">
  
    <Post author={user1.author}
          photo={user1.photo}
          nickname={user1.nickname}
          name={user1.name}
          date={user1.date}
          content={user1.content}
    />

    <Post author={user2.author}
          photo={user2.photo}
          nickname={user2.nickname}
          name={user2.name}
          date={user2.date}
          content={user2.content}
    />
  </div>
  );
}

export default PostPage;