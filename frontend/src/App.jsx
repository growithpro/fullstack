import { useEffect ,useState} from "react"

function App() {

  const [data,setData]=useState([])
  useEffect(async () => {

    const response = await fetch("https://fullstack-6gqe.onrender.com/api/products")
    const products = await response.json();

    setData(products);

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
