import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView, DonationLeeluriView } from "../../views";

const Leeluri: NextPage = (props) => {
  return (
    <div>
       <Head>
        <title>DonationLeeluri</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <h1 className='text-[57px] font-semibold ' style={{ marginTop: '60px',transform:'translateX(400px)' }}>
        Donation
      </h1>
    <div style={{transform: 'translateX(400px)',marginTop: '7px',}}>
    <DonationLeeluriView/>
    </div>
  </div>
  );
};

export default Leeluri;
