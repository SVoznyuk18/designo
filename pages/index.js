import dynamic from "next/dynamic";

const Home = dynamic(() => import('../src/containers/Home/Home'));

export const getStaticProps = async () => {
  const responseServices = await fetch('http://localhost:3000/api/services');

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