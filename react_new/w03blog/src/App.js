import './App.css';
import Booklist, { booka, bookb, Blog } from './singlebook';
import logo from './logo.svg'; /*
const booka = {
  img: 'https://ibw.bwnet.com.tw/image/pool/2014/12/24e79693f2d5c5902acc60dc3d23da4a.png',
  title: 'Diary of a Wimpy Kid',
  author: ' Jeff Kinney ',
};*/ /*
const bookb = {
  img: 'https://tw-stage.blog.voicetube.com/wp-content/uploads/2014/12/0619yejiyun0.jpg',
  title: 'The Old Man and the Sea',
  author: 'Ernest Hemmingway ',
};*/
/*const bookc = {
  img: 'https://cdn2.momjunction.com/wp-content/uploads/2015/12/The-Golden-Compass.jpg.avif',
  title: 'The Golden Compass',
  author: 'Philip Pullman',
};*/
/*
function App() {
  return (
    <div className='blogs'>
      <div className='section-title'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div className='blogs-center'>
        <Blog
          img={
            'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D'
          }
          title={'Operating system concepts : Windows XP update'}
          author={'Silberschatz, Abraham'}
        />
        <Blog img={booka.img} title={booka.title} author={booka.author}></Blog>
        <Blog img={bookb.img} title={bookb.title} author={bookb.author}></Blog>
      </div>
    </div>
  );
}*/
function App() {
  return (
    <div className='blogs'>
      <div className='section-title'>
        <h2>latest blogs</h2>
      </div>
      <div className='blogs-center'>
        <Blog
          img='https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=1000&auto=format&fit=crop&q=60'
          title='Operating system concepts : Windows XP update'
          author='Silberschatz, Abraham'
        />
        <Blog img={booka.img} title={booka.title} author={booka.author} />
        <Blog img={bookb.img} title={bookb.title} author={bookb.author} />
      </div>
      <div className='section-title'>
        <h2>part2</h2>
      </div>
      <Booklist />
    </div>
  );
}
/*
const Blog = ({ img, title, author }) => {
  return (
    <article className='blogs'>
      <img src={img} alt='Coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </article>
  );
};*/

export default App;
