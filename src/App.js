import './App.css';
import Home from './component/Home'
import SeachBar from './component/SearchBar';

function App() {
  return (
    <>    <div className='aurora-outer'>
      <div className='aurora-inner'>
        <h1>Main Event.</h1>
        <h2>Concerts. Sports.<br />Arts &amp; Theatre</h2>
        <Home />
      </div>
    </div>
    </>

  );
}

export default App;

