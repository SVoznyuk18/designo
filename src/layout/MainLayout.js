import Head from "next/head";
import {Header, Footer} from "@/components";


const MainLayout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='practice Next.js'
        />
      </Head>
      <Header/>
      {children}       
      <Footer/>
    </>
  );
}

export default MainLayout;