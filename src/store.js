import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from './features/habitSlice';

const store = configureStore({
    reducer: {
        habits: habitsReducer,
    },
});
export default store;