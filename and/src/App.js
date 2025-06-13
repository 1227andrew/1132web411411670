import { useEffect, useState } from 'react';
import Alert_xx from './Alertxx';

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (
    show = false,
    msg = 'please enter something',
    type = 'no'
  ) => {
    setAlert({ show, msg, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 修正拼寫
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(), // 修正 getTime
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  return (
    <section className='section-center'>
      <form className='grocery' onSubmit={handleSubmit}>
        {alert.show && <Alert_xx {...alert} removeAlert={showAlert} />}
        <h3>菜籃</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='exempli gratia'
            value={name} // 修正這裡
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default App;
