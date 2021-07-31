import './App.css';
import { Switch, Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/home';
import About from './pages/about';
import Howto from './pages/howto';
import Create from './pages/create';
import Join from './pages/join';
import Login from './pages/login';
import SignUp from './pages/signup';
import New from './pages/new'
import PodProfile from './pages/podprofile';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/game/pod-profile">
            <PodProfile></PodProfile>
          </Route>
          <Route path="/game/new">
            <New></New>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/game/join">
            <Join></Join>
          </Route>
          <Route path="/game/create">
            <Create></Create>
          </Route>
          <Route path="/game/how-to">
            <Howto></Howto>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
