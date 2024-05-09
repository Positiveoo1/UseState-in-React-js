import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import './Counter.css'
// import User from './User'

function App() {
  return (
    <>
      {/* <User name="Abu" experience="Frontend developer"/> */}
      <div className='main'>
        <Header />
        <Counter />
      </div>

    </>
  );
}

export default App;
