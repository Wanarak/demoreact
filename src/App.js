//import logo from './logo.svg';
//import './App.css';
//import logo from './assets/riot-games.png';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<Signup />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>  
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Website Riot Games.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://www.riotgames.com/en"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Go to Website
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
