import logo from './logo.svg';
import './App.css';
import menu from './data';
import Meunlist from './component/Menu';
import Category_xx from './component/Category';
import { useState } from 'react';

function App() {
  const [newmenu, setMenu] = useState(menu);
  const categoryFiliter = (choose) => {
    if (choose === 'all') {
      setMenu(menu);
    } else {
      setMenu(menu.filter((value) => value.category === choose));
    }
  };
  return (
    <div className='App'>
      <section className='menu'>
        {/*<!-- title -->*/}
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        {/*<!-- filter buttons -->*/}
        <Category_xx categoryFiliter={categoryFiliter} />
        <Meunlist items={newmenu} />
      </section>
      {/*<!-- javascript -->*/}
    </div>
  );
}

export default App;
