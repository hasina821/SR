import {configureStore} from "@reduxjs/toolkit"
import postSlice from "../toolkit/post";

const store = configureStore({
     reducer:{
          post:postSlice.reducer
     }
})

export default store;

