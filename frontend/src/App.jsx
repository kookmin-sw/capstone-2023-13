import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import MainPage from './pages/MainPage/MainPage';
import TransHistory from './components/TransHistory/TransHistory';
import Sidebar from './components/Sidebar';
import FindPassword from "./pages/FindPassword/FindPassword";
import EnterPassword from './components/EnterPassword/EnterPassword';
import MyPage from './components/MyPage/MyPage';
import OrderInfo from './components/OrderInfo/OrderInfo';


// import './App.css'

function App() {

  return (
    <div className="App">
      {/* <StartPage/> */}
      <Sidebar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/enterpassword' element={<EnterPassword />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/main' element={<MainPage/>} />
          <Route path='/trans' element={<TransHistory/>} />
          <Route path='/orderinfo' element={<OrderInfo/>} />
          {/* <Route path='/findpassword' element={<FindPassword />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
