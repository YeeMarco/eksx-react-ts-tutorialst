import { useEffect, useState } from "react";
export const useArray = <T> (arr:T[])=>{
   let [arrState, setArr] = useState<T[]>(arr)
   const clear = ()=>{
    setArr([])
   }
   const removeIndex = (index:number)=>{
    let old = arrState
    old.splice(index,1)
    setArr(old)
   }
   const add = (item:T) =>{
    let old = arrState
    old.push(item)
    setArr(old)
   }
   return [arrState,clear,removeIndex,add]
}