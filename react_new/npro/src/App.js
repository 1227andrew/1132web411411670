import { useEffect, useState } from 'react';
import Alert_xx from './components/Alertxx';
import './App.css';
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });
  //設定提示訊息，只要你呼叫 showAlert() 沒有傳入參數，它就會使用這些預設值
  const showAlert = (
    show = false,
    msg = 'please enter something',
    type = 'no'
  ) => {
    setAlert({ show, msg, type });
    //console.log('state '+alert.show+' msg '+alert.msg+' type '+alert.type);//抓不到最新的值，setAlert 是非同步的
  };
  //新增一個新的submit行為，e乃event
  const handleSubmit = (e) => {
    e.preventDefault();
    /*if (name) {
      const newitem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      console.log([...list, newitem]);
      setList([...list, newitem]);
      setName('');
      window.alert(' we did it ye');
    } else {
      showAlert();
    }
    console.log(alert);*/
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    } else {
      showAlert(true, 'value changed', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  return (
    <section className='section-center'>
      {/* 1.傳統form用action，預設也會使用action講述資料交給伺服器後的處理， 現在用onsubmit 自定義*/}
      <form className='gerocery' onSubmit={handleSubmit}>
        {/* 條件渲染 所以當條件渲染的元件被移除再加回來時，它的生命週期會重新開始導致它裡面的useeffect每次都一定會執行相依性[]沒用*/}
        {alert.show && <Alert_xx {...alert} removeAlert={showAlert} />}
        <h3>菜籃</h3>

        <div className='form-control'>
          <input
            type='text'
            className='gerocery'
            placeholder='exempli gratia'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default App;
