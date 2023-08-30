import { createSlice } from "@reduxjs/toolkit";
import { taskApi } from "../../api/taskApi";
import { setIsLoadingTaskREDU } from "./loadingSlice";

const initialState = {
    listTaskUser: {},
    idUser: null,
};

const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        setListTaskUserREDU: (state, { payload }) => {
            state.listTaskUser[state.idUser] = payload;
        },
        setUpdateTaskUserREDU: (state, { payload }) => {
            const idUser = state.idUser;
            const result = state.listTaskUser[idUser].map((task) => {
                let result = { ...task };
                if (task.id === payload.id) {
                    result = { ...payload };
                }
                return result;
            });

            state.listTaskUser = {
                ...state.listTaskUser,
                [idUser]: result,
            };
        },
        setIdUserREDU: (state, { payload }) => {
            state.idUser = payload;
        },
    },
});

export const { setIdUserREDU, setListTaskUserREDU, setUpdateTaskUserREDU } = taskSlice.actions;

export default taskSlice.reducer;

// =========================MIDLEWARE============================

//setListTaskUserMID
export const setListTaskUserMID = (idUser) => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoadingTaskREDU(true));

            const { data, status } = await taskApi.getListTaskUser(idUser);

            console.log("setListTaskUserMID", { data, status });

            //lưu userLogin
            dispatch(setListTaskUserREDU(data));
        } catch (err) {
            console.log(err);
        } finally {
            dispatch(setIsLoadingTaskREDU(false));
        }
    };
};
