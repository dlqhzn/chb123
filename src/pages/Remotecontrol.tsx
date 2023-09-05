import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView, RemotecontrolView } from "../views";

const Remotecontrol: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Remotecontrol</title>
        <meta
          name="Remotecontrol"
          content="Remotecontrol"
        />
      </Head>
      <div style={{ marginTop:"7px",marginLeft:"400px" }}>
        <h1 className="text-[50px] font-semibold mt-12 mb-6 font-[700]">Remlte</h1>
      <RemotecontrolView />
      </div>
    </div>
  );
};

export default Remotecontrol;
