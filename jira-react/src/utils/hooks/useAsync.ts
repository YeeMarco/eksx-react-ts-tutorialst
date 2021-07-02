import { useState } from "react";

interface State<D> {
  error: Error | null;
//   data: D | null;
  stat: "idle" | "loading" | "error" | "success";
}
const defaultState: State<null> = {
  stat: "idle",
  // data: null,
  error: null,
};

export const useAsync = <D, T>(p: Promise<T>, initState?: State<D>) => {
  let [state, setState] = useState<State<D>>({
    ...defaultState,
    ...initState,
  });
  let promise = p.then((res) => {
    setState({
      stat: "success",
      error: null,
    });
    return Promise.resolve(res)
  }).catch((err) => {
    setState({
        stat: "error",
        error: err,
      });
    return Promise.reject(err)
  });

  return [state,promise]

};
