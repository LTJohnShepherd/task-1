import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useScroll } from '../hooks/useScroll'

export default function ScrollPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const skipRef = useRef(0);
  const loadingRef = useRef(false);
  const { endScreen, setEndScreen } = useScroll();

  useEffect(() => {
    doApi(0);
  }, [])

  useEffect(() => {
    if (endScreen) {
      getNextPage();
      setEndScreen(false);
    }
  }, [endScreen])

  const doApi = async (skip) => {
    try {
      setError("");
      setLoading(true);
      loadingRef.current = true;
      const url = `https://api.fda.gov/food/enforcement.json?limit=10&skip=${skip}`;
      const { data } = await axios.get(url);
      const results = data.results || [];
      setList(prev => [...prev, ...results]);
      skipRef.current = skip;
      setLoading(false);
      loadingRef.current = false;
    }
    catch (err) {
      console.log(err);
      setLoading(false);
      loadingRef.current = false;
      setError("There was an error loading recalls. Please try again later.");
    }
  }

  const getNextPage = () => {
    if (loadingRef.current) return
    const nextSkip = skipRef.current + 10;
    doApi(nextSkip);
  }

  return (
    <div style={{ minHeight: "150VH" }} className='container'>
      <div style={{ minHeight: "200px" }} className='bg-warning'>warning scroll</div>
      <div className='mt-4'>
        <h2>Food Recall List</h2>
        {loading && <div className='text-primary'>Loading more records...</div>}
        <div className='text-danger'>{error}</div>
        <ul className='list-group'>
          {list.map(item => (
            <li key={item.recall_number} className='list-group-item'>
              <strong>{item.product_description || item.recalling_firm}</strong>
              <div>{item.reason_for_recall}</div>
              <div className='small text-muted'>Recall date: {item.recall_initiation_date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
