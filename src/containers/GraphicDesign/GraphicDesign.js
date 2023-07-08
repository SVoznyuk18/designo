import PropTypes from 'prop-types';
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import('@/layout/MainLayout'));
const MainSection = dynamic(() => import('../../components/MainSection/MainSection'), {loading: () => <p>Loading...</p>});
const Projects = dynamic(() => import('../../components/Projects/Projects'), {loading: () => <p>Loading...</p>});
const ServicesSection = dynamic(() => import('../../components/ServicesSection/ServicesSection'), {loading: () => <p>Loading...</p>});

const GraphicDesign = ({projects, services}) => {
  return (
    <MainLayout title='Graphic Design'>
      <MainSection
        title='Graphic Design'
        subTitle='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
      />
      <Projects projects={projects}/>
      <ServicesSection services={services}/>
    </MainLayout>
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

export default GraphicDesign;