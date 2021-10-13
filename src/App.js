import './App.css';
import Appcounter from './Appcounter';
import { FaHeart } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
       <h1 className='vijay'>Counter App</h1>
       <Appcounter />
      <h4>Made with <span className="fa"><FaHeart /></span> by Vijay</h4>
      <br/>
    </div>
  );
}

export default App;
