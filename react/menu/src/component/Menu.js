import React from 'react';

export default function Menulist({ items }) {
  return (
    <div className='section-center'>
      {items.map((value, index, _) => {
        const { id, title, img, price, desc } = value;
        return (
          <article className='menu-item'>
            <img src={img} alt={title} class='poto' />
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
