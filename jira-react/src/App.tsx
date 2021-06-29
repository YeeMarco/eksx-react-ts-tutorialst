import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import {Login} from "./views/login";
import {Project} from "./views/project";
import {AppProvider} from "./context/App/App.context";
function App() {
  return (
    <AppProvider>
      <Project />
    </AppProvider>
    
  );
}

export default App;
