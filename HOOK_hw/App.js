import { useEffect, useState } from 'react';
import './App.scss';
function App() {
  const [color, setColor] = useState('');
  const [colorarray, setColorarray] = useState([]);
}

function FavoriteColor({ color, setColor }) {
  return (
    <>
      <h1>My favorite color is {color}!</h1>{' '}
      <button type='button' onClick={() => setColor('blue')}>
        Blue
      </button>{' '}
      <button type='button' onClick={() => setColor('red')}>
        red
      </button>{' '}
      <button type='button' onClick={() => setColor('pink')}>
        Pink
      </button>{' '}
      <button type='button' onClick={() => setColor('green')}>
        Green
      </button>
      {/* <p>blue {bluecount}次</p> */}       {' '}
    </>
  );
}

function Car() {
  const [car, setCar] = useState({
    brand: 'Ford',
    model: 'Mustang',
    year: '1964',
    color: 'red',
  });
  function changColor(newcolor) {
    setCar({ ...car, color: newcolor });
  }
  function changYear(newyear) {
    setCar({ ...car, year: newyear });
  }

  const handleYearChange = (e) => {
    setCar({ ...car, year: e.traget.value });
  };

  return (
    <>
      <h1>My {car.brand}</h1>{' '}
      <p>
        It is a {car.color} {car.model} from {car.year}.{' '}
      </p>{' '}
      <button onClick={() => changColor('green')}>changColor to green</button>{' '}
      <button onClick={() => changColor('blue')}>changColor to green</button>
      <br></br> <button onClick={() => changYear(1000)}>改年份</button>{' '}
    </>
  );
}
