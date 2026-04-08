import React from 'react'
import Counter from '../components/Counter'
import Shop from '../components/Shop'

export default function HookPage() {
  return (
    <div className='container'>
      <Shop />
      <hr/>
      <Counter />
    </div>
  )
}
