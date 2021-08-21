import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/About";



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
  <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
  
      <Route path="/sobre" >
        <Sobre />
      </Route>
  </Switch>
  );
}