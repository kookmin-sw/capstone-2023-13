import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import MainPage from './pages/MainPage/MainPage';
import Sidebar from './components/Sidebar/Sidebar';
import FindPassword from "./pages/FindPassword/FindPassword";
import EnterPassword from './components/EnterPassword/EnterPassword';
import Logout from './components/Logout/Logout';


// import './App.css'

function App() {

  return (
    <div className="App">
      {/* <StartPage/> */}
      

      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/enterpassword' element={<EnterPassword />} />
          <Route path='/main' element={<MainPage/>} />
          {/* <Route path='/orderinfo' element={<OrderInfo/>} /> */}
          {/* <Route path='/findpassword' element={<FindPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
