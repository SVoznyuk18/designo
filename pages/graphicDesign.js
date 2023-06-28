import {GraphicDesign} from '@/containers';

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/graphicProjects');
    const data = await response.json();

    return (
        {
            props: {projects: data}
        }
    )
}

const GraphicDesignPage = ({projects}) => {
    return (
        <GraphicDesign projects={projects}/>
    )
}

export default GraphicDesignPage;