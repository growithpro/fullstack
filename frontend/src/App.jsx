import { useEffect } from "react"

function App() {

  useEffect(async () => {

    const response = await fetch("https://fullstack-6gqe.onrender.com/api/products")
    const data = await response.json();

  }, []);

  return (
    <>
      {
        JSON.stringify(data)

      }
    </>
  )
}

export default App
