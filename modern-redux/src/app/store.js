import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import usersReducer from "../features/users/usersSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

