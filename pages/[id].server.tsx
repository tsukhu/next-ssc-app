import type { NextPage } from "next";
import { Suspense } from "react";
import Layout from "../components/Layout.server";
import Note from "../components/Note.server";
import { Spinner } from "../components/Spinner.server";

const Home: NextPage = ({ router }: any) => {
  const selectedId = router?.query?.id ? router?.query?.id : 1;
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Note selectedId={selectedId ?? 1} />
      </Suspense>
    </Layout>
  );
};

export default Home;
