

import React, { useState, useEffect } from 'react'

export function useScroll() {
  const [endScreen, setEndScreen] = useState(false);

  useEffect(() => {
    // האזנה לגלילה בעכבר
    window.addEventListener("scroll", onscroll)
    return () => {
      window.removeEventListener("scroll",onscroll);
    }
  }, [])

  const onscroll = () => {
    // גובה החלון של המשתמש
    const windowHeight = window.innerHeight;
    // console.log(windowHeight);
    // יחזיר את נקודת הוואי של הגלילה לפי החלק העליון של החלון
    const scrollTop = document.documentElement.scrollTop;
    // קבלת הגובה של כל המסמך כולל הגלילה
    const docHeight = document.documentElement.offsetHeight;
    console.log(windowHeight, scrollTop, "total height:"+docHeight);
    // כדי לבדוק שהגענו לתחתית של המסך 
    // נבדוק שגובה החלון פלוס נקודת הוואי העליונה שווה
    // לגובה הכולל של המסמך
    if(Math.ceil(windowHeight + scrollTop) >= docHeight){
      setEndScreen(true);
      console.log("end screen");
    }
  }

  return { endScreen, setEndScreen }
}
