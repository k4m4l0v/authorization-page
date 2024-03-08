import { Link } from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
    <div className='app'>
      <Link to={'/login'} className='main__link'>Login here!</Link>
      <Link to={'/registration'} className='main__link'>Register here!</Link>
    </div>
  );
}

export default App;
