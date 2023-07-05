import PropTypes from 'prop-types';

import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects, ServicesSection} from '@/components';

const GraphicDesign = ({projects, services}) => {
  return (
    <MainLayout title='Graphic Design'>
      <MainSection
        title='Graphic Design'
        subtitle='We deliver eye-catching branding materials that are <br>
        tailored to meet your business objectives.
        '
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