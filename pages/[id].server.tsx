import type { NextPage } from "next";
import { Suspense } from "react";
import Note from "../components/Note.server";
import NoteList from "../components/NoteList.server";
import { Spinner } from "../components/Spinner.server";

const Home: NextPage = ({ router }: any) => {
  const selectedId = router?.query?.id ? router?.query?.id : 1;
  return (
    <div className="flex">
      <div className="h-screen w-1/4 bg-gray-100">
        <Suspense fallback={<Spinner />}>
          <NoteList />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<Spinner />}>
          <Note selectedId={selectedId ?? 1} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
