import dynamic from "next/dynamic";

const GraphicDesign = dynamic(() => import('../src/containers/GraphicDesign/GraphicDesign'));

export const getServerSideProps = async () => {

  const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.DEV_HOST;

  const responseProjects = await fetch(`${baseUrl}/api/graphicProjects`);
  const responseServices = await fetch(`${baseUrl}/api/services`);
  
  const projects = await responseProjects.json();
  const services = await responseServices.json();

  return (
    {
      props: {projects, services}
    }
  )
}

const GraphicDesignPage = ({projects, services}) => {
  return (
    <GraphicDesign projects={projects} services={services}/>
  )
}

export default GraphicDesignPage;