import { useEffect } from "react";
export const useMount = (cb:Function) => {
  useEffect(() => {
    cb();
  }, []);
};
