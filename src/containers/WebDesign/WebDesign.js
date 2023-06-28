import PropTypes from 'prop-types';

import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects} from '@/components';

const WebDesign = ({projects}) => {
  return (
    <MainLayout title='Web Design'>
      <MainSection
        title='Web Design'
        subtitle='We build websites that serve as powerful marketing tools <br/>and bring memorable brand experiences.'
      />
      <Projects projects={projects}/>
    </MainLayout>
  );
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    descr: PropTypes.string,
    image: PropTypes.string,
  })).isRequired
}

export default WebDesign;