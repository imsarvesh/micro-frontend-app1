import React from "react";
import logo from "./logo.svg";
import "./App.css";

// @ts-check
import { Button } from "app2/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <React.Suspense fallback="loading">
          <Button data-testid="helloFriendsButton">Hello Friends 🚀</Button>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
