import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import endPoints from '../../api/apiEndpoints';
import { get } from '../../services/getService';
const intialState = {
    loading: false,
    featuredDatas: []
};

export const getFeaturedNewsAsync = createAsyncThunk('getFeaturedNews/getFeaturedNewsAsync', async () => {
    const response = await get(endPoints.getFeaturedNews);
    if (response.statusText === 'OK') {
        return response.data.response.docs;
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
            state.loading = false;
            state.featuredDatas = payload
        },
    }
})

export default getFeaturedNewsSlice.reducer;
