import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context.js";


function App() {
  const { user } = useContext(Context);
  //console.log(user);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home/> : <Login/>} />
        <Route path='/write' element={user ? <Write /> : <Register/>} />
        <Route path='/settings' element={user ? <Settings /> : <Register/>} />
        <Route path='/post/:postId' element={user ?<Single/> : <Register/>} />
      </Routes>
      
    </Router>
   
  );
}

export default App;
