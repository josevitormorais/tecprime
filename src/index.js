import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

import { BrowserRouter, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
