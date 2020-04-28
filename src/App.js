import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import ToDo from "./components/pages/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/todo"} exact component={ToDo} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
