import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Automato from './pages/Automato';
import Home from './pages/Home';
import Regex from './pages/Regex';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/regex" exact>
          <Regex />
        </Route>
        <Route path="/auto" exact>
          <Automato />
        </Route>
      </Switch>
    </Router>
  );
}
