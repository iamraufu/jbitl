import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Publication from './Components/Publication/Publication';
import Projects from './Components/Projects/Projects';
import Experts from './Components/Experts/Experts';
import Connect from './Components/Connect/Connect';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/publication">
          <Publication />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/experts">
          <Experts />
        </Route>

        <Route path="/connect">
          <Connect />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
