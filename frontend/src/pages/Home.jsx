import { useSelector } from 'react-redux'


const Home = () => {
  const products = useSelector((state) => state.product.product.data)
  console.log(products)
  return (
    <div className='w-full overflow-auto flex flex-wrap gap-2.5 items-center justify-center'>
        {products.map((e)=>(
          <div key={e.id} className='w-[30%] h-100 border rounded-2xl'>
            <div className='w-[90%] h-50 m-auto mt-3 rounded-2xl '> 
              <img className='object-fit rounded-2xl w-full h-full' src={e.image} alt="" />
            </div>
            <h1 className='w-[90%] m-auto mt-3 text-2xl font-bold'>{e.title}</h1>
            <h3 className='w-[90%] m-auto text-blue-400'>${e.price}</h3>
            <p className='w-[90%] m-auto '>{e.description}</p>
            <button className='bg-blue-400 px-2 mt-2 rounded ml-[30%]'>Add to Cart</button>
        </div>
        ))}
    </div>
  )
}

export default Home