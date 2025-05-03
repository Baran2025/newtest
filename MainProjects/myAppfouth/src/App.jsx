import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const countHandler = () =>{
    setCount(count + 1)
  }

  // console.log('Hello')
  //1)Component mounting

  useEffect(
    () => {
      console.log('mounting')
         console.log('Hello')
    },
    []
  )


  // 2)Component mounting

  //   useEffect(
  //   () => {
  //     console.log('mounting')
  //     console.log('Hello')
  //   },
  //   [count]
  // )
  return (
    <>
     <h1>App</h1>
     <button onClick={countHandler}>Count</button>
    </>
  )
}

export default App
