import instance from "../../api/AxiosConfig";
import { loaduser } from "../reducers/userSlice";

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

export const currentUser = () => (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
        dispatch(loaduser(user))
    }else{
        console.log("user not loged in now...")
    }
  } catch (error) {
    console.log(error)
  }
};

export const logoutUser = () => (dispatch, getState) => {
  localStorage.removeItem("user");
  console.log("User is Logout now!");
};
