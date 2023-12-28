
import './App.css';
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="col-md-6 mx-auto">
        <h3>Welcome Page</h3>
        <Link to="/login" className='btn btn-success'>Login</Link>
        <Link to="/Register" className='btn btn-primary'>Register</Link>
      </div>
    </>
  );
}

export default App;
