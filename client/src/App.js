import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import StartWriting from "./components/StartWriting";
import Profile from "./components/Profile";
import Collegetag from './components/Collegetag';
import Login from './components/Loginpage'
import SignUp from './components/SignUp'
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/college" component={Profile} />
        <Route exact path="/startwriting" component={StartWriting} />
          <Route exact path="/search" component={Collegetag} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />

        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
