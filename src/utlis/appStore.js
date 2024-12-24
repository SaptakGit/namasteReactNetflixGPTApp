import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesRedurer from "./moviesSlice";

const appStore = configureStore({
        reducer: {
            user:userReducer,
            movies:moviesRedurer,
        },
});

export default appStore;