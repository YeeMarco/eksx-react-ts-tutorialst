import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Setting } from "../views/setting";
import { M1 } from "../views/setting/module1";
import { M2 } from "../views/setting/module2";
import { NotFound } from "../views/notfound";

const Login = lazy(() =>
  import("../views/login").then((module) => ({
    default: module.Login,
  }))
);

const Project = lazy(() =>
  import("../views/project").then((module) => ({
    default: module.Project,
  }))
);

export const router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="project" element={<Project />} />
        <Route path="setting" element={<Setting />}>
          <Route path="/" element={<M1 />} />
          <Route path="m1" element={<M1 />} />
          <Route path="m2" element={<M2 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
