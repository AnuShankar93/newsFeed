import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import endPoints from '../../api/apiEndpoints';
import {get} from '../../services/getService';
const intialState = {
    loading: false,
    datas: []
};

export const getFeaturedNewsAsync = createAsyncThunk('getFeaturedNews/getFeaturedNewsAsync', async () => {
    const response = await get(endPoints.getFeaturedNews);
        if (response.statusText === 'OK') {
            return response.data.results;
        }
});

export const getFeaturedNewsSlice = createSlice({
    name: 'getFeaturedNews',
    initialState: intialState,
    reducers: {},
    extraReducers: {
        [getFeaturedNewsAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [getFeaturedNewsAsync.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.loading = false;
            state.datas = payload
        },
    }
})

export default getFeaturedNewsSlice.reducer;
