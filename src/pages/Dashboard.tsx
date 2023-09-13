import type { NextPage } from "next";
import Head from "next/head";
import { DashboardView } from "../views";


const Dashboard: NextPage = (props) => {
  return (
    <div>
        <Head>
        <title>Dashboard</title>
        <meta
          name="Dashboard"
          content="Dashboard"
        />
      </Head>

      <div style={{ marginTop:"7px",marginLeft:"400px" }}>
        <h1 className="text-[50px] font-semibold mt-6 mb-6 font-[700]">Dashboard</h1>
        <DashboardView/>
        </div>
    </div>
  );
};

export default Dashboard;
