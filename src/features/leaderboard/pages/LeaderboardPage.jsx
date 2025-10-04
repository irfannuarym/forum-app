import React from "react";
import { useDispatch } from "react-redux";
import BaseLayout from "../../../common/layouts/BaseLayout";
import Leaderboard from "../components/Leaderboard";
import { asyncReceiveLeaderboards } from "../states/leaderboards";

function LeaderboardPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  return (
    <BaseLayout>
      <Leaderboard />
    </BaseLayout>
  );
}

export default LeaderboardPage;
