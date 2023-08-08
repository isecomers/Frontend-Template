import { createSlice } from "@reduxjs/toolkit";

// type of initial state
type Initialstate = {
  name: string;
  password: string;
};

// declare initial state
const initialState: Initialstate = {
  name: "",
  password: "",
};

// create slice for user include name, initial state, and reducers to assigh data
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    assignUser: (state, action) => {
      return action.payload;
    },
  },
});

// export the reducer action
export const { assignUser } = userSlice.actions;

// export the reducer to add in store
export default userSlice.reducer;
