import PropTypes from 'prop-types';
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import('@/layout/MainLayout'));
const ServicesSection = dynamic(() => import('../../components/ServicesSection/ServicesSection'), {loading: () => <p>Loading...</p>});
const Advantages = dynamic(() => import('../../components/Advantages/Advantages'), {loading: () => <p>Loading...</p>});
import {ClassicButton} from '@/components'

import {
  MainSection, 
  MainContent, 
  Title, 
  SubTitle, 
} from './StyledComponents';

const Home = ({services}) => {
  return (
    <MainLayout title='Home'>
      <MainSection>
        <MainContent>
          <Title>Award-winning custom designs and digital branding solutions</Title>
          <SubTitle>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</SubTitle>
          <ClassicButton variant='light'>Learn More</ClassicButton>
        </MainContent>
      </MainSection>
      <ServicesSection services={services}/>
      <Advantages/>
    </MainLayout>
  )
}

Home.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    src: PropTypes.string,
    href: PropTypes.string,
  })).isRequired
}

export default Home;