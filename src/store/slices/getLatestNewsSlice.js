import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import endPoints from '../../api/apiEndpoints';
import {get} from '../../services/getService';
const intialState = {
    loading: false,
    latestDatas: []
};

export const getLatestNewsAsync = createAsyncThunk('getLatestNews/getLatestNewsAsync', async () => {
    const response = await get(endPoints.getLatestNews);
    if (response.statusText === 'OK') {
        console.log(response)
        const {docs} =response.data.response;
        console.log(typeof docs)
        return response.data.response.docs;
    }
});

export const getLatestNewsSlice = createSlice({
    name: 'getLatestNews',
    initialState: intialState,
    reducers: {},
    extraReducers: {
        [getLatestNewsAsync.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [getLatestNewsAsync.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.latestDatas = payload
        },
    }
})

export default getLatestNewsSlice.reducer;
