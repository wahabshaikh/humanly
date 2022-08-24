import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Humanly</title>
        <meta
          name="description"
          content="Humanly is a daily quiz game based on behavorial psychology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Humanly</h1>
      </main>
    </>
  );
};

export default Home;
