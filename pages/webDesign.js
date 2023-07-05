import dynamic from "next/dynamic";

const WebDesign = dynamic(() => import('../src/containers/WebDesign/WebDesign'));

export const getServerSideProps = async () => {

    const baseUrl = process.env.NODE_ENV === 'production' ? process.env.PROD_HOST : process.env.DEV_HOST;

    const responseProjects = await fetch(`${baseUrl}/api/webProjects`);
    const responseServices = await fetch(`${baseUrl}/api/services`);
    
    const projects = await responseProjects.json();
    const services = await responseServices.json();

    return {
        props: {projects, services}
    }
}

const WebDesignPage = ({projects, services}) => {
    return (
        <WebDesign projects={projects} services={services}/>
    )
}

export default WebDesignPage;
