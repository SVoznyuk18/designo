import {AppDesign} from '@/containers';

export const getStaticProps = async () => {
    const responseProjects = await fetch('http://localhost:3000/api/appProjects');
    const responseServices = await fetch('http://localhost:3000/api/services');
    
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