import React , {Suspense} from "react";
// import logo from "./logo.svg";
import "./App.css";

import "antd/dist/antd.css";
import { AppProvider } from "./context/App/App.context";
import {router as Router} from './router'

import { LoadingOutlined } from "@ant-design/icons";

function App() {
  return (
    <AppProvider>
       <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "7rem",
              height: "100vh",
            }}
          >
            <LoadingOutlined />
          </div>
        }
      >
        <Router />
       </Suspense>
    </AppProvider>
  );
}

export default App;
