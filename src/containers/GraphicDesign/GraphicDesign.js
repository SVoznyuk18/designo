import PropTypes from 'prop-types';

import MainLayout from "@/layout/MainLayout";
import {MainSection, Projects} from '@/components';

const GraphicDesign = ({projects}) => {
  return (
    <MainLayout title='Graphic Design'>
      <MainSection
        title='Graphic Design'
        subtitle='We deliver eye-catching branding materials that are <br>
        tailored to meet your business objectives.
        '
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

export default GraphicDesign;