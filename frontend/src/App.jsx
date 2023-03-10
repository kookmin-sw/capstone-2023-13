import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';





function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/loginbox" element={<LoginBox />} />

          <Route path="/mainpage" element={<G />} />
        </Routes>
      </BrowserRouter> */}

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
