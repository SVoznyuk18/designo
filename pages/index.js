import dynamic from "next/dynamic";

const Home = dynamic(() => import('../src/containers/Home/Home'));

export const getServerSideProps = async () => {

  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.DEV_HOST;

  const responseServices = await fetch(`${baseUrl}/api/services`);

  const services = await responseServices.json();

  return {
    props: {services}
  }
}

const HomePage = ({services}) => {
  return (
    <Home services={services}/>
  )
}

export default HomePage;