import { useEffect } from 'react'
import Navbar from './pages/Navbar'
import Shoproutes from './routes/shop.routes'
import { currentUser } from './store/actions/userAction'
import { useDispatch } from 'react-redux'


function App() {

  const dispatch = useDispatch()
   useEffect(()=>{
  dispatch(currentUser())
 })
 
  return (
<>
<Navbar />
    <div className='w-full h-[100vh] bg-gray-800 text-white font-thin flex flex-col items-center justify-center'>
      
      <Shoproutes/>
    </div>
    </>
  )
}

export default App