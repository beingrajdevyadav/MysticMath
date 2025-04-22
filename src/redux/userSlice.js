import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../utils/localStorage";


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

