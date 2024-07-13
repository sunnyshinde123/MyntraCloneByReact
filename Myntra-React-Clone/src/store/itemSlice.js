import {createSlice} from "@reduxjs/toolkit"
import { items } from "../data/data";
import { useEffect } from "react";

const itemSlice=createSlice({
  name:"item",
  initialState:[],
  reducers:{
    addItems:(state, action)=>{
        return action.payload;
    }
  }
})

export const itemSliceAction=itemSlice.actions;

export default itemSlice;