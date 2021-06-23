import { useEffect, useState } from "react";

export const useDebounce = (value:any, delay:number):any => {
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


export const useDebounce1 = (
  cb: Function,
  deps: any, 
  delay: number = 4000
): any => {
  console.log("useDebounce");
  useEffect(() => {
    console.log("useEffect");
    let timer = setTimeout(()=>{
      console.log("setTimeout  cb");
      cb()
    }, delay);
    console.log(timer);

    return () => {
      console.log(timer, "clearTimeout");
      clearTimeout(timer);
    };
  }, deps);
};
