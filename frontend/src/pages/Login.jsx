import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../store/actions/userAction';
import { toast } from 'react-toastify';

function Login() {
    
    const {
    register,
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch()
   const notify = (data) => toast.success(`${data.username} Welcome Back`);
    const Navigate = useNavigate()

  const loginhandle = (user)=>{
   const res = dispatch(loginUser(user))
    console.log(res)
    
  }

  return (
    <form onSubmit={handleSubmit(loginhandle)} className='flex flex-col border-[rgba(255,255,255,0.3)] w-fit items-center gap-2.5 p-10 rounded-2xl bg-[rgba(255,255,255,0.1)]'>
        <p className='border px-3 py-1 rounded-2xl'>Log in</p>
        <input className='border-b w-80 mt-2' {...register('username')} type="text" placeholder='Jone-Doe' />
        <input className='border-b w-80 mt-2'{...register('password')} type="passsword" placeholder='Password' />
        <button className='bg-blue-400 px-3 py-1 mt-5 rounded-2xl font-semibold'>Login</button>
       <p>Not a Member ? <NavLink to={'/register'} className='text-blue-400 '>Register Here</NavLink></p>
    </form>
  )
}

export default Login