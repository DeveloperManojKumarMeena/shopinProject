import { useEffect } from 'react'
import instance  from './api/AxiosConfig.jsx'

function App() {
  const getProduct = async()=>{
    try {
     const res = await instance.get("/Products")
     console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    getProduct()
  })
  return (
    <div>App</div>
  )
}

export default App