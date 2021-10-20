import React from "react";
import { Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdPage from "./pages/AdPage";
import NotFound from "./pages/NotFound";
import AddAd from "./pages/AddAd";
import Ads from "./pages/Ads";
import RouterHendler from "./components/RouterHendler";
import MyAccount from "./pages/MyAccount";



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

      <RouterHendler path="/ads" >
        <Ads />
      </RouterHendler>

      <RouterHendler private path="/post-an-ad" >
        <AddAd />
      </RouterHendler>

      <RouterHendler private path="/my-account" >
        <MyAccount />
      </RouterHendler>

      <RouterHendler>
        <NotFound />
      </RouterHendler>
    </Switch>
  );
}