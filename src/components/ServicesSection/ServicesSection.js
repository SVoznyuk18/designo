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
        <ServicesItem href='/webDesign'>
          <ServicesImage
            src={webDesign}
            alt='webDesign'
          />
          <Wrapper/>
          <ServicesTitle>WEB DESIGN</ServicesTitle>
          <ServicesSubTitle>VIEW PROJECTS</ServicesSubTitle>
        </ServicesItem>
        <ServicesItem href='/appDesign'>
          <ServicesImage
            src={appDesign}
            alt='appDesign'
          />
          <Wrapper/>
          <ServicesTitle>APP DESIGN</ServicesTitle>
          <ServicesSubTitle>VIEW PROJECTS</ServicesSubTitle>
        </ServicesItem>
        <ServicesItem href='/graphicDesign'>
          <ServicesImage
            src={graphicDesign}
            alt='graphicDesign'
          />
          <Wrapper/>
          <ServicesTitle>GRAPHIC DESIGN</ServicesTitle>
          <ServicesSubTitle>VIEW PROJECTS</ServicesSubTitle>
        </ServicesItem>
      </ServicesSection>
    </Container>
  );
};

export default Services;