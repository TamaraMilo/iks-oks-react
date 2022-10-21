import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";
import ReactDOM from "react-dom";
import { Home } from "./pages/home/home";
import { SdkProvider } from "@cosmicdapp/logic";
import { config } from "./config";
import { Room } from "./pages/room/room";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SdkProvider config={config}>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/room/:id" children={Room} />
          </Switch>
        </Router>
      </SdkProvider>
    </div>
  );
}

export default App;
