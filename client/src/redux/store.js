import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import courseReducer from "./features/courseSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        course: courseReducer,
    },
});
