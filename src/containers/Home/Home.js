import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

import {Container} from '@/styledComponents';
import {MainSection, MainContent, BgImage, Title, SubTitle, ProjectsSection, ProjectItem, ProjectImage, Wrapper, ProjectTitle, ProjectSubTitle} from './StyledComponents';

import appDesign from "@/public/home/appDesign.jpg";
import graphicDesign from "@/public/home/graphicDesign.jpg";
import webDesign from "@/public/home/webDesign.jpg";

const Home = () => {
  return (
    <MainLayout title='Home'>
        <MainSection>
          <MainContent>
            <Title>Award-winning custom designs and digital branding solutions</Title>
            <SubTitle>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</SubTitle>
          </MainContent>
        </MainSection>

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


       
       
    </MainLayout>
  )
}

export default Home;