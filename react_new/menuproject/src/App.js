import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <section className='menu'>
      {/* {<!-- title -->} */}
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      {/* {<!-- filter buttons -->} */}
      <div className='btn-container'>
        <button type='button' className='filter-btn' data-id='breakfast'>
          breakfast
        </button>
        <button type='button' className='filter-btn' data-id='lunch'>
          lunch
        </button>
        <button type='button' className='filter-btn' data-id='shakes'>
          shakes
        </button>
        <button type='button' className='filter-btn' data-id='dinner'>
          dinner
        </button>
      </div>
      {/* {<!-- menu items -->} */}
      <div className='section-center'></div>
    </section>
  );
}
export default App;
