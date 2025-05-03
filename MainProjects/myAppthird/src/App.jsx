import { useState } from "react"

function App() {

   const [count, setCount] = useState(0)

  // var count = 0

function countHandle(){

  //  console.log(++count)
  //  setCount(prev => prev + 1)
setCount(count  + 1)


}
 console.log(count);

  return (
    <>
     <button onClick={countHandle}>Increament</button>
     <h1>{count}</h1>
    </>
  )
}

export default App
