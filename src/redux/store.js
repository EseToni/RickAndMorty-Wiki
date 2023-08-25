import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducer";
import ThunkMiddleware from "redux-thunk";
import reducerNavigation from "./reducers/reducerNavigation";

const rootReducerCombined = combineReducers({
    reducer: rootReducer,
    secondReducer: reducerNavigation, // Cambia el nombre de asignación
});

const store = configureStore({
    reducer: rootReducerCombined,
    middleware: [ThunkMiddleware],
});

export default store;
