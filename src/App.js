import './App.css';
import Pass from './passwordGenerator/pass';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Weather from './Weather/weatherApp';
import Count from './Weather/Counter';
import Generate from './Weather/colorGenerator';
import Crud from './CRUD/Crud';
import TODO from './Todo/TODO';

function App() {
  return (
    <div className="App">
      <Pass />
      <Weather />
      <Count />
      <ToastContainer />
      <Generate />
      <Crud />
      <TODO />
    </div>
  );
}

export default App;
