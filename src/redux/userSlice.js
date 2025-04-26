import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";


const localData = getFromLocalStorage("report");


const initialState = localData || {
    fullName: "",
    dateOfBirth: "",
    destinyNumber: "",
    lifePathNumber: "",
    personalityNumber: "",
    soulUrgeNumber: "",
    month: "",
    astroSign: "",
    day: "",
    maturityNumber: "",
    birthday: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setUser: (state, action) => {
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
            state.maturityNumber = action.payload.maturityNumber;
            state.birthday = action.payload.birthday;
            // to save state in local storage
            saveToLocalStorage("report", state);
        },

        clearUser: (state) => {
            // to clear state
            state.fullName = "";
            state.dateOfBirth = "";
            state.destinyNumber = "";
            state.lifePathNumber = "";
            state.personalityNumber = "";
            state.soulUrgeNumber = "";
            state.month = "";
            state.astroSign = "";
            state.day = "";
            state.maturityNumber = "";
            state.birthday = "";
            // to save state
            saveToLocalStorage("report", state);

        }
    }
});


export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
