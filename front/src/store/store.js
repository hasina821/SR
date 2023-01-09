import {configureStore} from "@reduxjs/toolkit"
import postSlice from "../toolkit/post";
import { OffreSlice } from "../toolkit/offres";

const store = configureStore({
     reducer:{
          post:postSlice.reducer,
          offres:OffreSlice.reducer
     }
})

export default store;

