import { Footer } from "../components/Footer";
import { CompanyNameContent } from "../components/CompanyNameContent";
import { companyNameStyling } from "../styles/CompanyName.styling";
import Head from "next/head";

export default function CompanyName() {
  return (
    <>
      <Head>
        <title>Company Name</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <style>{"body { background-color: #f7f8ff; }"}</style>
      
      <CompanyNameContent />

      <Footer />
    </>
  );
}
