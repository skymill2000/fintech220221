import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ListComponent from "./components/ListComponent";
import HeaderWhite from "./components/HeaderWhite";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListExmaple></ListExmaple>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
