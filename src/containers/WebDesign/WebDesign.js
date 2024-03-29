import PropTypes from 'prop-types';
import dynamic from "next/dynamic";

const MainSection = dynamic(() => import('../../components/MainSection/MainSection'), {loading: () => <p>Loading...</p>});
const Projects = dynamic(() => import('../../components/Projects/Projects'), {loading: () => <p>Loading...</p>});
const ServicesSection = dynamic(() => import('../../components/ServicesSection/ServicesSection'), {loading: () => <p>Loading...</p>});

const WebDesign = ({projects, services}) => {
  return (
    <>
      <MainSection
        title='Web Design'
        subTitle='We build websites that serve as powerful marketing tools <br/>and bring memorable brand experiences.'
      />
      <Projects projects={projects}/>
      <ServicesSection services={services}/>
    </>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    descr: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    src: PropTypes.string,
    href: PropTypes.string,
  })).isRequired
}

export default WebDesign;