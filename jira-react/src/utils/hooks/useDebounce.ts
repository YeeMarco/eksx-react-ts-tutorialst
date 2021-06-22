import { useEffect, useState } from "react";
// export const useDebounce = (cb:Function,delay:number,dep:any[]) => {
//  useEffect(() => {
//     let timer = setTimeout(cb,delay)
//     return ()=>{
//         clearTimeout(timer)
//     }
//   }, dep);
// };

export const useDebounce = (value, delay) => {
  let [debounceValue, setDebounceValue] = useState();
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebounceValue(value)
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debounceValue;
};
