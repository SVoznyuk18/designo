import Link from 'next/link';

import {Container} from '@/styledComponents';
import {
  ServicesSection, 
  ServicesItem, 
  ServicesImage, 
  Wrapper, 
  ServicesTitle, 
  ServicesSubTitle,

} from './StyledComponents';

import appDesign from "@/public/home/appDesign.jpg";
import graphicDesign from "@/public/home/graphicDesign.jpg";
import webDesign from "@/public/home/webDesign.jpg";

export const Services = () => {
  return (
    <Container>
      <ServicesSection>
        <Link href='/webDesign'>
          <ServicesItem>
            <ServicesImage
              src={webDesign}
              alt='webDesign'
            />
            <Wrapper/>
            <ServicesTitle>WEB DESIGN</ServicesTitle>
            <ServicesSubTitle>VIEW PROJECTS</ServicesSubTitle>
          </ServicesItem>
        </Link>
      
        <Link href='/appDesign'>
          <ServicesItem>
              <ServicesImage
                src={appDesign}
                alt='appDesign'
              />
              <Wrapper/>
              <ServicesTitle>APP DESIGN</ServicesTitle>
              <ServicesSubTitle>VIEW PROJECTS</ServicesSubTitle>
            </ServicesItem>
        </Link>
       
        <Link href='/graphicDesign'>
          <ServicesItem>
            <ServicesImage
              src={graphicDesign}
              alt='graphicDesign'
            />
            <Wrapper/>
            <ServicesTitle>GRAPHIC DESIGN</ServicesTitle>
            <ServicesSubTitle>VIEW PROJECTS</ServicesSubTitle>
          </ServicesItem>
        </Link>
       
      </ServicesSection>
    </Container>
  );
};

export default Services;