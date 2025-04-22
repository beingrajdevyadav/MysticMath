import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";


const localData = getFromLocalStorage("user");


const initialState =localData || {
  fullName: "",
  dateOfBirth: "",
  destinyNumber: "",
  lifePathNumber: "",
  personalityNumber: "",
  soulUrgeNumber: "",
  month:"",
  astroSign:"",
  day: "",
};

const userSlice = createSlice({
    name:"user",
    initialState,

    reducers:{
        setUser : (state, action)=>{
            // to set data in state
            state.fullName = action.payload.fullName;
            state.dateOfBirth = action.payload.dateOfBirth;
            state.destinyNumber = action.payload.destinyNumber;
            state.lifePathNumber = action.payload.lifePathNumber;
            state.personalityNumber = action.payload.personalityNumber;
            state.soulUrgeNumber = action.payload.soulUrgeNumber;
            state.month = action.payload.month;
            state.astroSign = action.payload.astroSign;
            state.day = action.payload.day;

            // to save state in local storage
            saveToLocalStorage("user", state);
        }
    }
})
