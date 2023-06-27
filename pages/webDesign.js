import {WebDesign} from "@/containers"

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/webProjects');
    const data = await response.json();

    return {
        props: {projects: data}
    }
}

const WebDesignPage = ({projects}) => {
    return (
        <WebDesign projects={projects}/>
    )
}

export default WebDesignPage;
