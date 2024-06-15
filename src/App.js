import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Boosting from './Pages/Boosting/Boosting';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Boosting" element={<Boosting/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
