import type { NextPage } from "next";
import Layout from "../components/Layout.server";

const Home: NextPage = () => {
  return (
    <Layout>
      <div>{"Select Note"}</div>
    </Layout>
  );
};

export default Home;
