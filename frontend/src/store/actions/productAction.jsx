import instance from "../../api/AxiosConfig";
import {loadproduct} from '../reducers/productSlice'

export const createProduct = (product) => async (dispatch, getState) => {
    try {
        const res = await instance.post('products', product);
    } catch (error) {
        console.log(error)
    }
};

export const fetchProduct = () => async (dispatch, getState) => {
    try {
        const products = await instance.get('products');

        if(products){
             dispatch(loadproduct(products))
        }else{
            console.log("Product not avelable")
        }
    } catch (error) {
        console.log(error)
    }
};