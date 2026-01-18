import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function Register() {
    
    const {
    register,
    handleSubmit,
  } = useForm();

  const registerhandle =(data)=>{
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(registerhandle)} className='flex flex-col border-[rgba(255,255,255,0.3)] w-fit items-center gap-2.5 p-10 rounded-2xl bg-[rgba(255,255,255,0.1)]'>
        <p className='border px-3 py-1 rounded-2xl'>Register</p>
        <input className='outline-none border-b w-80 mt-2' {...register('username')} type="text" placeholder='Jone-Doe' />
        <input className='outline-none border-b w-80 mt-2'{...register('email')} type="email" placeholder='Jone@Doe.com' />
        <input className='outline-none border-b w-80 mt-2'{...register('password')} type="passsword" placeholder='Password' />
        <button className='bg-blue-400 px-3 py-1 mt-5 rounded-2xl'>Register</button>
       <p>Already a Member ? <NavLink to={'/Login'} className='text-blue-400 '>Login Here</NavLink></p>
    </form>
  )
}

export default Register