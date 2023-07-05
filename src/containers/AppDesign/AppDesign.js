import PropTypes from 'prop-types';

import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects, ServicesSection} from '@/components';

const AppDesign = ({projects, services}) => {
  return (
    <MainLayout
      title='App Design'
    >
      <MainSection
        title='App Design'
        subTitle='Our mobile designs bring intuitive digital solutions <br>
        to your customers right at their fingertips.'
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

export default AppDesign;