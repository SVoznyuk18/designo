import dynamic from "next/dynamic";

const AppDesign = dynamic(() => import('../src/containers/AppDesign/AppDesign'));

export const getServerSideProps = async () => {

  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.DEV_HOST;

  const responseProjects = await fetch(`${baseUrl}/api/appProjects`);
  const responseServices = await fetch(`${baseUrl}/api/services`);
  
  const projects = await responseProjects.json();
  const services = await responseServices.json();

  return {
    props: {projects, services}
  }
}

const AppDesignPage = ({projects, services}) => {
  return (
    <AppDesign projects={projects} services={services}/>
  )
}

export default AppDesignPage;