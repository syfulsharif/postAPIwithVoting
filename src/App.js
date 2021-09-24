import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ShowBlogs></ShowBlogs>
    </div>
  );
}


// function MyComponent () {
//   return (
//     <div className="myFirstComp">
//         <h1>Hello From My own Component</h1>
//         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur totam maiores vitae in delectus maxime, aut cupiditate tempora dolores optio ea, alias nesciunt rerum aperiam accusantium ullam blanditiis. Necessitatibus quod exercitationem facilis hic, impedit molestias voluptas eligendi excepturi fugiat iusto recusandae consectetur architecto sapiente eveniet a accusamus nemo nulla in.</p>
//     </div>
//   )
// }

function ShowBlogs () {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setBlogs(data));
  }, [])
  return (
    <div>
      {
        blogs.map(blog => <Blog title={blog.title} userId={blog.userId} body={blog.body}></Blog>)
      }
    </div>
  )
}

function Blog(props) {
  const [upVoteCount, setUpVoteCount] = useState(0);
  const upVoteHandler = () => {
    let newUpVote = upVoteCount + 1;
    setUpVoteCount(newUpVote);
  }

  const [downVoteCount, setDownVoteCount] = useState(0);
  const downVoteHandler = () => {
    let newDownVote = downVoteCount + 1;
    setDownVoteCount(newDownVote);
  }
  return (
    <div className="blogPost">
      <h3>Title: {props.title}</h3>
      <h4>User: {props.userId}</h4>
      <p>{props.body}</p>
      <button onClick={upVoteHandler}>Upvote <span>{upVoteCount}</span></button>
      <button onClick={downVoteHandler}>Downvote <span>{downVoteCount}</span></button>
    </div>

  )
}
export default App;
