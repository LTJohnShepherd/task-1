import React from 'react'
import { useApi } from '../hooks/useApi'

export default function Shop() {
  const url = "https://monkeys.co.il/api2/shop.php"
  const {list,loading,error} = useApi(url)

  return (
    <div>
      <h2>List of shop</h2>
      {loading && <h2>Loading...</h2>}
      <div className='text-danger'>{error}</div>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>{item.name} - {item.price}</li>
          )
        })}
      </ul>
    </div>
  )
}
