import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/userApi";

const initialState = {
    listUser: [],
    userSelector: null,
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setListUserREDU: (state, { payload }) => {
            state.listUser = payload;
        },
        setUserSelectorREDU: (state, { payload }) => {
            state.userSelector = payload;
        },
    },
});

export const { setUserSelectorREDU, setListUserREDU } = userSlice.actions;

export default userSlice.reducer;

// =========================MIDLEWARE============================

//setListUserMID
export const setListUserMID = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await userApi.getListUser();

            console.log("setListUserMID", { data, status });

            //lưu userLogin
            dispatch(setListUserREDU(data));
        } catch (err) {
            console.log(err);
        }
    };
};
