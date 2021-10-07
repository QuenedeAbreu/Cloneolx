/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../helpers/AuthHerdler";


export default ({ children, ...routerProps }) => {
  let logged = isLogged();
  let authorized = (routerProps.private && !logged) ? false : true;
  return (
    <Route
      {...routerProps}
      render={() =>
        authorized ? children : <Redirect to="/signin" />
      }
    />
  );
}