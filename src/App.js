import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import './App.css'
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config"

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const LogOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    })
  }
  return <Router>
    <nav>
      <Link to='/'>Home</Link>
      {
        !isAuth
          ?
          <Link to='/login'>Login</Link>
          :
          <>
            <Link to='/createpost'>Create Post</Link>
            <button onClick={LogOut}>Log Out</button>
          </>
      }

    </nav>
    <Routes>
      <Route path='/' element={<Home isAuth={isAuth} />} />
      <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
    </Routes>
  </Router>;
}

export default App;
