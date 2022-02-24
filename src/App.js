
import { useState } from 'react';
import './App.css';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
function App() {
  const [darkmode,setDarkmode]=useState(false)
  const [showSidebar,setShowSidbar]=useState(true)

  return (
  
      <main className={darkmode ? 'darkmode':undefined}
      data-testid='application'>
        <Header 
        darkmode={darkmode} setDarkmode={setDarkmode} 
        showSidebar={showSidebar}
        setShowSidbar={setShowSidbar}
        />
        <Content showSidebar={showSidebar} />
      </main>
      
  );
}

export default App;
