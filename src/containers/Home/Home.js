import PropTypes from 'prop-types';
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import('../../components/ServicesSection/ServicesSection'), {loading: () => <p>Loading...</p>});
const Advantages = dynamic(() => import('../../components/Advantages/Advantages'), {loading: () => <p>Loading...</p>});
import {ClassicButton} from '@/components'
import {Title, Text} from '@/styledComponents'
import {
  MainSection, 
  MainContent, 
} from './StyledComponents';

const Home = ({services}) => {
  return (
    <>
      <MainSection>
        <MainContent>
          <Title
            textAlign='left' 
            marginB='30px' 
            width="540px"
          >
            Award-winning custom designs and digital branding solutions
          </Title>
          <Text 
            width='450px' 
            fontSize='16px' 
            marginB='40px' 
            textAlign='left'
          >
            With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.
          </Text>
          <ClassicButton variant='light'>Learn More</ClassicButton>
        </MainContent>
      </MainSection>
      <ServicesSection services={services}/>
      <Advantages/>
    </>
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