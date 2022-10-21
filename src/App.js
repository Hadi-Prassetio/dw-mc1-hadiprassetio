import { BrowserRouter as Router,  Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import HomeDetail from "./pages/HomeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<HomeDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
