import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView, DoceView, } from "../views";

const Doce: NextPage = (props) => {
  return (
    <div style={{ marginTop:"7px",marginLeft:"400px" }}>
      <DoceView/>
    </div>
  );
};

export default Doce;
