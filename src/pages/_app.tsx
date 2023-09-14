import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { ContextProvider } from '../contexts/ContextProvider';
import { AppBar } from '../components/AppBar';
import { ContentContainer } from '../components/ContentContainer';
import Notifications from '../components/Notification';
import { useRouter } from 'next/router';
import Script from "next/script";
import { ConnectionProvider } from '@solana/wallet-adapter-react';

  
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {


  const router = useRouter();
  const isIndexPage = router.pathname === '/';
  

  const shouldRenderAppBar = pageProps.AppBar !== "widgets";
  

  const isWidgetsPage = router.pathname === '/widgets'; 


  return (
    <>
      <Head>
        <title>live toon</title>
      </Head>


      <ContextProvider>
        <div>
          <Notifications />
          {shouldRenderAppBar && !isIndexPage && !isWidgetsPage && <AppBar />}
            <ContentContainer>
            <Component {...pageProps} />
          </ContentContainer>
        </div>
      </ContextProvider>
    </>
  );
};

export default MyApp;