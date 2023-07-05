import dynamic from "next/dynamic";

const WebDesign = dynamic(() => import('../src/containers/WebDesign/WebDesign'));

export const getStaticProps = async () => {
    const responseProjects = await fetch('http://localhost:3000/api/webProjects');
    const responseServices = await fetch('http://localhost:3000/api/services');
    
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
