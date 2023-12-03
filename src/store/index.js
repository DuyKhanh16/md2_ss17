import {createSlice,configureStore,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import apiGetProductAdmin from "../config/firebase"
export const getProductAdmin = createAsyncThunk(
    "product/getAllProduct",
    async ()=>{
        const response = await axios.get(apiGetProductAdmin.getProduct);
        return response.data;
    }
);
const productAdminSlice = createSlice({
    name:"productAdmin",
    initialState:{
        productsAdmin:[]
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getProductAdmin.pending, (state, action) => { // pending:trạng thái đang đưa vào xử lý
        })
        .addCase(getProductAdmin.fulfilled, (state, action) => {//fulfilled: hoàn thành xử lý thành công

                state.productsAdmin=action.payload
                }
        )
        .addCase(getProductAdmin.rejected, (state, action) => { //rejected: lỗi
                    // state.error = action.error 
                }
            )
    }
})
//tạo reducer
const productReducer = productAdminSlice.reducer;
const store = configureStore ({
    reducer: {
        productReducer,
    }
})
export default store;

