import React from 'react';
export default function Meunlist({ items }) {
  return (
    <div class='section-center'>
      {items.map((value, index, _) => {
        const { id, title, img, price, desc } = value;
        return (
          <article key={id} class='menu-item'>
            <img src={img} alt={title} class Name='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
