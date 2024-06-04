
import { BrowserRouter } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Login/>
    {/* <Register /> */}
  </BrowserRouter>
);

export default App;
