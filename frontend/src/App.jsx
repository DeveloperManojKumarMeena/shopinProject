import { useEffect } from 'react'
import { asyncgetproducts } from './store/userAction.jsx'

function App() {
 
  useEffect(()=>{
  asyncgetproducts()
  })
  return (
    <div>App</div>
  )
}

export default App