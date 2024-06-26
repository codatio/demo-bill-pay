import Head from "next/head";
import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import { landingPageBoxStyling } from "../styles/LandingPage.styling";
import { LandingPageContent } from "../components/LandingPageContent";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <style>{"body { background-color: #f7f8ff; }"}</style>

      <Head>
        <title>Automate bill payments | Codat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={landingPageBoxStyling}>
        <LandingPageContent />
      </Box>
      <Footer />
    </div>
  );
}
