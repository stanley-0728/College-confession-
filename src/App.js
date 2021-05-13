import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import StartWriting from "./components/StartWriting";
import College from "./components/College";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/college" component={College} />
        <Route exact path="/startwriting" component={StartWriting} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
