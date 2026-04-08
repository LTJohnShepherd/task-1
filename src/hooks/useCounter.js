import { useState } from "react";
// יצירת הוק
export function useCounter(_startVal) {
  const [counter,setCounter] = useState(_startVal);

  const add1 = () => {
    setCounter(counter+1);
  }

  const resetCounter =  () => {
    setCounter(0)
  }
// הוק בשונה מקומפנינטה מחזיר פקודות
// ולא ג'יי אס אקס
  return {counter,add1,resetCounter}

}