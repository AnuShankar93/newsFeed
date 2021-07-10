import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import endPoints from '../../api/apiEndpoints';
import {get} from '../../services/getService';
const intialState = [];

export const getFeaturedNews = createAsyncThunk(
    'categories/getFeaturedNews', async () => {
        const response = await get(endPoints.getCategories);
        if (response.statusText === 'OK') {
            return response.data;
        }
    }
)

export const getFeaturedNewsSlice = createSlice({
    name: 'getFeaturedNews',
    initialState: intialState,
    reducers: {},
    extraReducers: {
        [getFeaturedNews.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [getFeaturedNews.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.categories = payload
        },
    }
})

export default getFeaturedNewsSlice.reducer;
