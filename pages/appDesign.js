import {AppDesign} from '@/containers';

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/appProjects');
    const data = await response.json();

    return {
        props: {projects: data}
    }
}

const AppDesignPage = ({projects}) => {
    return (
        <AppDesign projects={projects}/>
    )
}

export default AppDesignPage;