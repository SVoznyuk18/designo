import {GraphicDesign} from '@/containers';

export const getStaticProps = async () => {
    const responseProjects = await fetch('http://localhost:3000/api/graphicProjects');
    const responseServices = await fetch('http://localhost:3000/api/services');
    
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