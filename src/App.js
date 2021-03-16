import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import About from './About';
import useScript from './hooks/useScripts';

function App() {
  useScript('https://kit.fontawesome.com/a076d05399.js');
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
