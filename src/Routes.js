import React from "react";
import { Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdPage from "./pages/AdPage";
import NotFound from "./pages/NotFound";
import RouterHendler from "./components/RouterHendler";



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Switch>
      <RouterHendler exact path="/" >
        <Home />
      </RouterHendler>

      <RouterHendler exact path="/signin">
        <Signin />
      </RouterHendler>

      <RouterHendler path="/signup" >
        <Signup />
      </RouterHendler>

      <RouterHendler path="/ad/:id" >
        <AdPage />
      </RouterHendler>

      <RouterHendler private path="/post-an-ad" >
        <AdPage />
      </RouterHendler>

      <RouterHendler>
        <NotFound />
      </RouterHendler>
    </Switch>
  );
}