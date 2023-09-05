import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView, WidgetView } from "../views";
import { useEffect } from "react";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { ContentContainer } from "components/ContentContainer";




const Widget: NextPage = (props) => {
  // Set body height to 2500px on page load
  if (typeof window !== "undefined") {
    document.body.style.height = "1400px";
  }


  useEffect(() => {
    // 페이지에 들어올 때 body 스크롤을 보이도록 합니다.
    document.body.style.overflow = "visible";
    return () => {
      // 페이지를 떠날 때 body 스크롤을 숨깁니다.
      document.body.style.overflow = "hidden";
    };
  }, []);



  return (
    <div>
      <Head>
        <title>Widget</title>
      </Head>
      <div style={{ marginTop:"7px",marginLeft:"400px" }}>
        <h1 className="text-[38px] font-semibold mt-6 mb-6">Widget Setting</h1>
        <WidgetView />
      </div>
    </div>
  );
};

export default Widget;


