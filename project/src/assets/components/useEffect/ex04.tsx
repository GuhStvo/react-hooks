// EXERCÍCIO 5 — Relógio em tempo real

import { useEffect, useState } from "react"

export function UseEffect04() {
  const [hours, setHours] = useState<Date>(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHours(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  })

  const formHours: string = hours.toLocaleTimeString()

  
  return(
    <div className="flex w-full mt-90 items-center justify-center">
      <h1 className="text-7xl font-black">{formHours}</h1>
    </div>
  )
}