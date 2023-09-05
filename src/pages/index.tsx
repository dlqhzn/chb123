import type { NextPage } from "next";
import Head from "next/head";
import { Homepageview } from "../views";

const Homepage: NextPage = (props) => {
  return (
    <div>
        <Head>
        <title>Live Toon</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <Homepageview/>
    </div>
  );
};

export default Homepage;