import React from 'react'
import { useForm } from 'react-hook-form'
import { createProduct } from '../../store/actions/productAction'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {
    const {handleSubmit,register} = useForm()
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const productCreate = (prodata)=>{
            prodata.id=nanoid()
            console.log(prodata)
            dispatch(createProduct(prodata))
            navigate('/')
    }
    return (

        <>

            <form onSubmit={handleSubmit(productCreate)} className='flex flex-col border-[rgba(255,255,255,0.3)] w-fit items-center gap-2.5 p-10 rounded-2xl bg-[rgba(255,255,255,0.1)]'>
                <p className='border px-3 py-1 rounded-2xl'>Create Product</p>
                <input className='outline-none border-b w-80 mt-2' {...register('image')} type="text" placeholder='Image Url' />
                <input className='outline-none border-b w-80 mt-2'{...register('title')} type="text" placeholder='Title' />
                <input className='outline-none border-b w-80 mt-2'{...register('price')} type="number" placeholder='Price' />
                <textarea className='w-full mt-2' {...register('description')} placeholder='Discribe about product'></textarea>
                <input className='outline-none border-b w-80 mt-2'{...register('category')} type="text" placeholder='category' />
                <button className='bg-blue-400 px-3 py-1 mt-5 rounded-2xl font-semibold'>Create Product</button>
            </form>
        </>

    )
}

export default CreateProduct