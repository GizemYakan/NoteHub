import React ,{useState} from "react";
import AppContext from './AppContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Logout from './Logout'

function App() {
  let isLoggedIn = true;
  const [token,setToken] = useState("qwerty");
  return (
    <AppContext.Provider value={{token:"abc"}}>
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Logout">
          <Logout />
        </Route>
        <Route path="/">
          {isLoggedIn ? <Home /> : <div>Önce giriş yap</div>}
        </Route>
      </Switch>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
