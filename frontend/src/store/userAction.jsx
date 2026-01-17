import axios from '../api/AxiosConfig'
import { loaduser } from './UserSlice';

export const asyncgetproducts = async ()=>{
    try {
        const res = await axios.get("/users")
        console.log(res.data)
        loaduser(res.data)
    } catch (error) {
        console.log(error)
    }
};