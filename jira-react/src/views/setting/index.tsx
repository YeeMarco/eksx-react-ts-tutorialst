import { Routes, Route, Outlet } from "react-router-dom";
import { M1 } from "./module1";
import { M2 } from "./module2";

{
  /* <Routes>
<Route path="/m1" element={<M1 />} />
<Route path="/m2" element={<M2 />} />
</Routes> */
}
export const Setting = () => {
  return (
    <Outlet />

  );
};
