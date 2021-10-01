import {
  BrowserRouter as Router,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";

const Routes = () => {
  return (
    <HashRouter basename={"/captacao"}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/sucesso" component={Register} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
