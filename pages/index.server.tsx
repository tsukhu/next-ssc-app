import type { NextPage } from "next";
import { Suspense } from "react";
import NoteList from "../components/NoteList.server";
import { Spinner } from "../components/Spinner.server";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <div className="h-screen w-1/4 bg-gray-100">
        <Suspense fallback={<Spinner />}>
          <NoteList />
        </Suspense>
      </div>
      <div>{"Select Note"}</div>
    </div>
  );
};

export default Home;
