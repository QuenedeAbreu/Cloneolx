import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdPage from "./pages/AdPage";
import NotFound from "./pages/NotFound"



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>

      <Route exact path="/signin">
        <Signin />
      </Route>

      <Route path="/signup" >
        <Signup />
      </Route>

      <Route path="/ad/:id" >
        <AdPage />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}