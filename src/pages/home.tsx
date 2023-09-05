import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <h1 className='text-[57px] font-semibold ' style={{ marginTop: '60px',transform:'translateX(400px)' }}>
        Forms List
      </h1>
      <div style={{transform: 'translateX(400px)',marginTop: '7px',}}>
      <HomeView/>
      </div>
    </div>
  );
};

export default Home;
