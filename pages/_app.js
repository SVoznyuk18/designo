import { useRouter } from 'next/router';
import dynamic from "next/dynamic";

import '@/styles/global.css';
const MainLayout = dynamic(() => import('@/layout/MainLayout'));

const MyApp = ({Component, pageProps}) => {

  const {asPath} = useRouter();
  const title = asPath === '/' ? "Home" : asPath.slice(1);

  return (
    <MainLayout title={title}>
      <Component {...pageProps}/>
    </MainLayout>
    
  )
}

export default MyApp;