import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <Router basename={"/felicidadea2"}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/sucesso" component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
