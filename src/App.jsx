import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import HomePage from "./common/components/HomePage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import LoginPage from "./features/auth/pages/LoginPage";
import LeaderboardPage from "./features/leaderboard/pages/LeaderboardPage";
import NewThreadPage from "./features/threads/pages/NewThreadPage";
import ThreadDetailPage from "./features/threads/pages/ThreadDetailPage";
import NotFoundPage from "./common/components/NotFoundPage";
import { asyncPreloadProcess } from "./store/isPreload";

function App() {
  const isPreload = useSelector((state) => state.isPreload);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return (
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/threads/:threadId" element={<ThreadDetailPage />} />
      <Route path="/new" element={<NewThreadPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
