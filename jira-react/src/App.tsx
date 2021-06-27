import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import {Login} from "./views/login";
import {AppProvider} from "./context/App/App.context";
function App() {
  return (
    <AppProvider>
      <Login />
    </AppProvider>
    
  );
}

export default App;
