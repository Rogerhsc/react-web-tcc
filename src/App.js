import React from 'react';
import './App.css';
import ViewServicos from './components/viewServicos/index';
import Routes from './routes';
import Header from './components/header';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Link to={"/1"}></Link>
      </Routes>
    </div>
  );
}

export default App;
