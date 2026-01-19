import instance from "../../api/AxiosConfig"

export  const registerUser = (user)=>(dispatch,getState)=>{

    try {
        
       const res = instance.post("users",user)
       console.log(res)

    } catch (error) {
        console.log(error)
    }


}