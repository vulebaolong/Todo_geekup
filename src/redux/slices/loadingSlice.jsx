import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoadingBtn: false,
    isLoadingTask: false,
};

const loadingSlice = createSlice({
    name: "loadingSlice",
    initialState,
    reducers: {
        setIsLoadingBtnREDU: (state, { payload }) => {
            state.isLoadingBtn = payload;
        },
        setIsLoadingTaskREDU: (state, { payload }) => {
            state.isLoadingTask = payload;
        },
    },
});

export const { setIsLoadingTaskREDU, setIsLoadingBtnREDU } = loadingSlice.actions;

export default loadingSlice.reducer;
