import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productdata : []
}

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        loadproduct:(state , action)=>{
            state.product=action.payload
        },
    }
})

export default productSlice.reducer
export const {loadproduct} = productSlice.actions