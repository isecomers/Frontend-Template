import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import userReducer from "./features/userSlice";

// make store to store data
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// hooks for using data and dispatches
// Dont need this if you use JavaScript intead use (useDispatch and useSelector) hooks
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
