import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

export default function Counter() {
  // שימוש בהוק שיצרנו
  // נעשה דיסטרקט לפקודות שיש בהוק
  // 8 - כי אנחנו רוצים להתחיל מ8
  const {counter,add1,resetCounter} = useCounter(8)

  return (
    <div>
      <h2>Counter:{counter}</h2>
      <button onClick={add1}>Add 1</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  )
}
