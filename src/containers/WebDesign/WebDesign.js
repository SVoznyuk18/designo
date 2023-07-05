import PropTypes from 'prop-types';

import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects, ServicesSection} from '@/components';

const WebDesign = ({projects, services}) => {
  return (
    <MainLayout title='Web Design'>
      <MainSection
        title='Web Design'
        subtitle='We build websites that serve as powerful marketing tools <br/>and bring memorable brand experiences.'
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

export default WebDesign;