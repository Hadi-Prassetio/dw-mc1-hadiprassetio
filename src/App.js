import { BrowserRouter as Router,  Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route /> */}
      </Routes>
    </Router>
  );
}

export default App;
