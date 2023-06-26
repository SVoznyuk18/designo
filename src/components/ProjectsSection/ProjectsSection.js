import {Container} from '@/styledComponents';
import {
  ProjectsSection, 
  ProjectItem, 
  ProjectImage, 
  Wrapper, 
  ProjectTitle, 
  ProjectSubTitle,

} from './StyledComponents';

import appDesign from "@/public/home/appDesign.jpg";
import graphicDesign from "@/public/home/graphicDesign.jpg";
import webDesign from "@/public/home/webDesign.jpg";

export const Projects = () => {
  return (
    <Container>
      <ProjectsSection>
        <ProjectItem>
          <ProjectImage
            src={webDesign}
            alt='webDesign'
          />
          <Wrapper/>
          <ProjectTitle>WEB DESIGN</ProjectTitle>
          <ProjectSubTitle>VIEW PROJECTS</ProjectSubTitle>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage
            src={appDesign}
            alt='appDesign'
          />
          <Wrapper/>
          <ProjectTitle>APP DESIGN</ProjectTitle>
          <ProjectSubTitle>VIEW PROJECTS</ProjectSubTitle>
        </ProjectItem>
        <ProjectItem>
          <ProjectImage
            src={graphicDesign}
            alt='graphicDesign'
          />
          <Wrapper/>
          <ProjectTitle>GRAPHIC DESIGN</ProjectTitle>
          <ProjectSubTitle>VIEW PROJECTS</ProjectSubTitle>
        </ProjectItem>
      </ProjectsSection>
    </Container>
  );
};

export default Projects;