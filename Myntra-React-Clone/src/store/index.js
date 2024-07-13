import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemSlice";
import fetchSlice from "./fetchSliceStatus";
import BagItem from "../routes/BagItem";
import bagSlice from "./bagSlice";

const store=configureStore({
  reducer:{item:itemSlice.reducer, fetchServerData:fetchSlice.reducer, BagItem:bagSlice.reducer},
})

export default store;