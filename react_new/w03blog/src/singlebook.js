import React from 'react';

const booka = {
  img: 'https://ibw.bwnet.com.tw/image/pool/2014/12/24e79693f2d5c5902acc60dc3d23da4a.png',
  title: 'Diary of a Wimpy Kid',
  author: ' Jeff Kinney ',
};
const bookb = {
  img: 'https://tw-stage.blog.voicetube.com/wp-content/uploads/2014/12/0619yejiyun0.jpg',
  title: 'The Old Man and the Sea',
  author: 'Ernest Hemmingway ',
};
export const bookc = {
  img: 'https://cdn2.momjunction.com/wp-content/uploads/2015/12/The-Golden-Compass.jpg.avif',
  title: 'The Golden Compass',
  author: 'Philip Pullman',
};
export { booka, bookb };

export function Blog({ img, title, author }) {
  return (
    <div className='blog'>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

var data = [
  {
    id: 1,
    img: 'https://ibw.bwnet.com.tw/image/pool/2014/12/24e79693f2d5c5902acc60dc3d23da4a.png',
    title: 'Diary of a Wimpy Kid',
    author: ' Jeff Kinney ',
  },
  {
    id: 2,
    img: 'https://tw-stage.blog.voicetube.com/wp-content/uploads/2014/12/0619yejiyun0.jpg',
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemmingway ',
  },
  {
    id: 3,
    img: 'https://cdn2.momjunction.com/wp-content/uploads/2015/12/The-Golden-Compass.jpg.avif',
    title: 'The Golden Compass',
    author: 'Philip Pullman',
  },
];

function Booklist() {
  return (
    <section className='blogs-center'>
      {data.map(function callfun(value, index) {
        const { id, img, title, author } = value;
        return <Blog key={id} img={img} title={title} author={author}></Blog>;
      })}
    </section>
  );
}

/*data.map((value) => {
  return (
    <Blog
      key={value.id}
      img={value.img}
      title={value.title}
      author={value.author}
    />
  );
});*/

export default Booklist;
