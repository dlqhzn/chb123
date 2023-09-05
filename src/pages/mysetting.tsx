import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView, MysettingView } from "../views/index";

const mysetting: NextPage = (props) => {
  return (
    <div> 
      <Head>
        <title>My setting</title>
      </Head>
      <div style={{ marginTop:"7px",marginLeft:"400px" }}>
        <h1 className="text-[50px] font-semibold mt-6 mb-6 font-[700]">Edit Profile</h1>
      <MysettingView/>
      </div>
    </div>
  );
};

export default mysetting;
