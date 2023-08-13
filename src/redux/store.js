import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import ThunkMiddleware from "redux-thunk";

const store = configureStore({
    reducer: rootReducer,
    middleware: [ThunkMiddleware],
});

export default store;