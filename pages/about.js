import dynamic from "next/dynamic";

const About = dynamic(() => import('../src/containers/About/About'));

const AboutPage = () => {
    return (
        <About/>
    );
}

export default AboutPage;