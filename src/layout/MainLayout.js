import Head from "next/head";
import Header from "@/components/Header/Header";

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
    </>
  );
}

export default MainLayout;