import logo from './logo.svg';
import './app.scss';
function App() {
  return (
    <div className='back'>
      <Earth />
    </div>
  );
}

const Earth = () => {
  return (
    <div className='earth'>
      <h2>hello world</h2>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGh8ZW58MHx8MHx8fDA%3D'
        ></img>
      </div>
      <p>this is my first react code</p>
    </div>
  );
};

const Blog = ({ img, title, author }) => {
  return (
    <article className='blog'>
      <img className='img blog-img' src={img} alt='Coffee photo'></img>
      <div className='blog-content'>
        <p>{author}</p>
      </div>
    </article>
  );
};
export default App;
