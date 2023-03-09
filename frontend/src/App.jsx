import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './login';
import Sidebar from './components/sidebar';

// import G from './game/G';



function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <div>
        <iframe
          title="GDevelop Game"
          src="/game/index.html"
          width="1920px"
          height="800px"
          frameBorder="0"
        />
        <button>hi</button>
      </div>
      <div style={{paddingLeft: "100px"}}>hello world</div>
      <Sidebar width={320} />
    </>
  )
}

export default App
