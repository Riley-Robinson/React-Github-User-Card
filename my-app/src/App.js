import React from "react";
import User from "./components/User";
import "./App.css";
import GitHubCalendar from 'react-github-calendar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>People via sketchy cat shape logo</h1>
      </header>
      <User />
      <GitHubCalendar username="Riley-Robinson" />
    </div>
  );
}

export default App;
