import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Home from "./pages/home/home";
import { ProtectedSwitch, SdkProvider } from "@cosmicdapp/logic";
import { config } from "./config";
import Room from "./pages/room/room";


function App() {
  return (
    <div className="App">
      <SdkProvider config={config}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route
              path="/result"
              exact
              component={() => {
                return (
                  <main>
                    <h1>Result</h1>
                  </main>
                );
              }}
            />
              <Route path="/room/:id" exact component={Room} />
          </Switch>
        </Router>
      </SdkProvider>
    </div>
  );
}

export default App;
