import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
