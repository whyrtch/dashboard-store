import React, {useState} from 'react';
import './App.css';
import Sidebar from "./components/sidabar/Sidebar";
import MainPanel from "./pages/main/MainPanel";

function App() {
    const [currentPath] = useState(window.location.pathname);
  return (
    <div className="wrapper">
        <Sidebar currentPath={currentPath}/>
        <MainPanel currentPath={currentPath}/>
    </div>
  );
}

export default App;
