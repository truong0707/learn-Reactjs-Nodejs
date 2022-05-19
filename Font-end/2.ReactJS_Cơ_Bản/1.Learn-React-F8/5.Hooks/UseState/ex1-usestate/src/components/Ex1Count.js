import { useState } from 'react' 


// Component được render sau khi ta setState

export default function Ex1Count(){
  const n = 1
  const [counter, setCounter] = useState(n)

  function handleIncrease(){
    setCounter(counter + 10)
  }

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}