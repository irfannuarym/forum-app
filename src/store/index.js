import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "../features/auth/states/authUser";
import isPreloadReducer from "./isPreload";
import leaderboardsReducer from "../features/leaderboard/states/leaderboards";
import threadDetailReducer from "../features/threads/states/threadDetail";
import threadsReducer from "../features/threads/states/threads";
import usersReducer from "../features/users/states/users";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
