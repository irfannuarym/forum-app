import React from "react";
import { useDispatch } from "react-redux";
import BaseLayout from "../layouts/BaseLayout";
import Threads from "../../features/threads/components/Threads";
import { asyncPopulateThreadsAndUsers } from "../../store/shared";

function HomePage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncPopulateThreadsAndUsers());
  }, [dispatch]);

  return (
    <BaseLayout>
      <Threads />
    </BaseLayout>
  );
}

export default HomePage;
