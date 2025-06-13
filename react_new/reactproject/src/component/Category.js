import React from 'react';

const Category_xx = ({ categoryFiliter }) => {
  return (
    <div className='btn-container'>
      <button
        type='button'
        className='filter-btn'
        data-id='all'
        onClick={() => categoryFiliter('all')}
      >
        all
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='breakfast'
        onClick={() => categoryFiliter('breakfast')}
      >
        breakfast
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='lunch'
        onClick={() => categoryFiliter('lunch')}
      >
        lunch
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='snakes'
        onClick={() => categoryFiliter('snakes')}
      >
        snakes
      </button>
      <button
        type='button'
        className='filter-btn'
        data-id='dinner'
        onClick={() => categoryFiliter('dinner')}
      >
        dinner
      </button>
    </div>
  );
};

export default Category_xx;
