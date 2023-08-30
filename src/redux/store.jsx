import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import taskSlice from "./slices/taskSlice";
import themeSlice from "./slices/themeSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
    reducer: {
        userSlice,
        taskSlice,
        themeSlice,
        loadingSlice,
    },
});
