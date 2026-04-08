import axios from "axios";
import { useEffect, useState } from "react";

// הוק שיעשה בקשת אי פי איי 
// וגם יחזיר טעינה וטעויות אם יש
export function useApi(_starturl){
  const [list,setList] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  useEffect(() => {
    doApi(_starturl);
  },[])

  const doApi = async(_url = _starturl) => {
    try{
      setList([])
      setLoading(true);
      const {data} = await axios.get(_url); 
      setList(data);
      if(data.length == 0){
        setError("Not Found");
      }
      setLoading(false);

    }
    catch(err){
      console.log(err)
      setLoading(false);
      setError("There is error, come back again later")
    }
  }

  return {list,loading,error,doApi}

}