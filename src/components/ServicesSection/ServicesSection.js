import { useRouter } from 'next/router';

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

const services = [
  {
    id: 'webDesign',
    title: 'WEB DESIGN',
    subTitle: 'VIEW PROJECTS',
    src: webDesign,
    href: '/webDesign'
  },
  {
    id: 'appDesign',
    title: 'APP DESIGN',
    subTitle: 'VIEW PROJECTS',
    src: appDesign,
    href: '/appDesign'
  },
  {
    id: 'graphicDesign',
    title: 'GRAPHIC DESIGN',
    subTitle: 'VIEW PROJECTS',
    src: graphicDesign,
    href: '/graphicDesign'
  },
]

export const Services = () => {

  const {pathname} = useRouter();

  const currentPage = pathname.slice(1);

  const filteredServices = services.filter(service => service.id !== currentPage);

  return (
    <Container>
      <ServicesSection>
        {
          filteredServices && filteredServices.map((service) => (
            <ServicesItem href={service?.href} key={service?.id}>
              <ServicesImage
                src={service?.src}
                alt={service?.id}
              />
              <Wrapper/>
              <ServicesTitle>{service?.title}</ServicesTitle>
              <ServicesSubTitle>{service?.subTitle}</ServicesSubTitle>
            </ServicesItem>
          ))
        }
      </ServicesSection>
    </Container>
  );
};

export default Services;