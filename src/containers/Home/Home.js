import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

import {Container} from '@/styledComponents';
import {Projects} from '@/components'
import {
  MainSection, 
  MainContent, 
  Title, 
  SubTitle, 
  ProjectsSection, 
  ProjectItem, 
  ProjectImage, 
  Wrapper, 
  ProjectTitle, 
  ProjectSubTitle,
  AdvantagesSections,
  Advantage,
  AdvantageImage,
  AdvantageInfo,
  AdvantageTitle,
  AdvantageDescr
} from './StyledComponents';

import appDesign from "@/public/home/appDesign.jpg";
import graphicDesign from "@/public/home/graphicDesign.jpg";
import webDesign from "@/public/home/webDesign.jpg";
import friendly from "@/public/home/friendly.svg";
import passionate from "@/public/home/passionate.svg";
import resourceful from "@/public/home/resourceful.svg";

const Home = () => {
  return (
    <MainLayout title='Home'>
        <MainSection>
          <MainContent>
            <Title>Award-winning custom designs and digital branding solutions</Title>
            <SubTitle>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</SubTitle>
          </MainContent>
        </MainSection>

        <Projects/>

        
        <Container>

          <AdvantagesSections>
            <Advantage>
              <AdvantageImage
                src={passionate}
                alt='passionate'
                width={200}
                height={200}
              />
              <AdvantageInfo>
                <AdvantageTitle>PASSIONATE</AdvantageTitle>
                <AdvantageDescr>
                  Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                </AdvantageDescr>
              </AdvantageInfo>
             
            </Advantage>

            <Advantage>
              <AdvantageImage
                src={resourceful}
                alt='resourceful'
                width={200}
                height={200}
              />

              <AdvantageInfo>
                <AdvantageTitle>RESOURCEFUL</AdvantageTitle>
                <AdvantageDescr>
                  Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                </AdvantageDescr>
              </AdvantageInfo>
            </Advantage>

            <Advantage>
              <AdvantageImage
                src={friendly}
                alt='friendly'
                width={200}
                height={200}
              />
              <AdvantageInfo>
                <AdvantageTitle>FRIENDLY</AdvantageTitle>
                <AdvantageDescr>
                  We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                </AdvantageDescr>
              </AdvantageInfo>
            </Advantage>

          </AdvantagesSections>
        </Container>

       
       
    </MainLayout>
  )
}

export default Home;