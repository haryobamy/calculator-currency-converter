import React from "react";
import { Calc, Currency, Navbar, Footer } from "./components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Calc />
          </Route>
          <Route exact path="/currency">
            <Currency />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
