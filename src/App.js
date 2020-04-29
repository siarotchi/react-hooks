import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import TodoProvider from "./components/context/TodoProvider";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/todo"} exact component={TodoProvider} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
