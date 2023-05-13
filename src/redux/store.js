import { configureStore } from "@reduxjs/toolkit";

import { alertSlice } from "./featuers/alertSlice";
import { userSlice } from "./featuers/userSlice";
export default configureStore({
    reducer: {
        alert: alertSlice.reducer,
        user : userSlice.reducer
    },
});
