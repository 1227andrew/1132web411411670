import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Card></Card>
    </div>
  );
}
const Card = () => {
  return (
    <div className='Card'>
      <h2>hello world</h2>
      <div className='App-logo'>
        <img src='https://images.unsplash.com/photo-1744648617182-519c4bf39e30?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
      </div>
      <p>this is my first react code</p>
    </div>
  );
};
export default App;
