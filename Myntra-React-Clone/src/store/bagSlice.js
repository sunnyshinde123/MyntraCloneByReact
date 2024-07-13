import {createSlice} from "@reduxjs/toolkit"

const bagSlice=createSlice({
  name:'BagItems',
  initialState:[],
  reducers:{
    addItemInBag:(state, action)=>{
      console.log(state);
      console.log(action);
      state.push(action.payload);
    },
    removeItemFromBag:(state, action)=>{
      console.log(state);
      console.log(action);
      return state.filter((ele)=> ele.id!=action.payload);
    }
  }

})

export default bagSlice;

export const bagSliceAction=bagSlice.actions;