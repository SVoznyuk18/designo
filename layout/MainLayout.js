import Head from "next/head";

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
      {children}       
    </>
  );
}

export default MainLayout;