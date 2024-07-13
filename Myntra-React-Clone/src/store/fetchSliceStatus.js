import {createSlice} from "@reduxjs/toolkit"

const fetchSlice=createSlice({
  name:'fetchServerData',
  initialState:{
    fetchDone:false,
    markFetchDone:false,
  },
  reducers:{
    isfetchDone:(state)=>{
      state.fetchDone=true
    },
    markFetchingStart:(state)=>{
      state.markFetchDone=true;
    },
    markFetchingEnd:(state)=>{
      state.markFetchDone=false
    }
  }
})

export default fetchSlice;

export const fetchSliceAction=fetchSlice.actions;