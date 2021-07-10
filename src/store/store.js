import { configureStore } from "@reduxjs/toolkit";
import getFeaturedNewsSliceReducer from './slices/getFeaturedNewsSlice';
import getLatestNewsSliceReducer from "./slices/getLatestNewsSlice";
const store = configureStore({
    reducer: {
       featured: getFeaturedNewsSliceReducer,
       latest: getLatestNewsSliceReducer
    }
});

export default store;