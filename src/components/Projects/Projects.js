
import PropTypes from 'prop-types';

import {ProjectCard} from '@/components';
import {Container} from '@/styledComponents';
import {ProjectsSection} from './StyledComponents';


const Projects = ({projects}) => {
  return (
    <Container>
      <ProjectsSection>
        {
          projects && projects.map((project) => (
            <ProjectCard 
              key={project?.id} 
              project={project}
            />
          ))
        }
      </ProjectsSection>
    </Container>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    descr: PropTypes.string,
    image: PropTypes.string,
  })).isRequired
}

export default Projects;