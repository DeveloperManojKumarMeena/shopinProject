import instance from "../../api/AxiosConfig";

export const loginUser = (user) => async (dispatch, getState) => {
  try {
    const res = await instance.get(
      `users?username=${user.username}&password=${user.password}`,
    );
    localStorage.setItem("user", JSON.stringify(res.data[0]));
    
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (user) => (dispatch, getState) => {
  try {
    const res = instance.post("users", user);
  } catch (error) {
    console.log(error);
  }
};

export const currentUser = ()=>(dispatch,getState)=>{
  const user =  JSON.parse(localStorage.getItem("user"))
  

}

export const logoutUser = ()=>(dispatch,getState)=>{
    localStorage.removeItem("user")
    console.log("User is Logout now!")
}