import logo from './logo.svg';
import './App.css';
import menu from './data';
import Menulist from './component/Menu';
import Category_xx from './component/Category';
import { useState } from 'react';

function App() {
  return (
    <section className='menu'>
      <div class='title'>
        <h2> class menu </h2>
        <div classNam='underline'></div>
      </div>

      <Category_xx />
      <Menulist items={menu}></Menulist>
    </section>
  );
}

export default App;
