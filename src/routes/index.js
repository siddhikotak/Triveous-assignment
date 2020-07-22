import React from "react";
import { Switch, Route } from "react-router-dom";
import { Paths } from "./routePaths";
import Temp from "../containers/Temp";
import Navbar from "../components/Navbar";

const Routes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={Paths.Temp} component={Temp} />
      </Switch>
    </>
  );
};

export default Routes;
