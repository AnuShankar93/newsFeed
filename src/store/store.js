import { configureStore } from "@reduxjs/toolkit";
import getFeaturedNewsSlice from './slices/getFeaturedNewsSlice';

const store = configureStore({
    reducer: {getFeaturedNewsSlice}
});

export default store;