import MainLayout from "@/layout/MainLayout";

import {ServicesSection, Advantages, Form} from '@/components'
import {
  MainSection, 
  MainContent, 
  Title, 
  SubTitle, 
} from './StyledComponents';

const Home = () => {
  return (
    <MainLayout title='Home'>
      <MainSection>
        <MainContent>
          <Title>Award-winning custom designs and digital branding solutions</Title>
          <SubTitle>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</SubTitle>
        </MainContent>
      </MainSection>
      <ServicesSection/>
      <Advantages/>
      <Form/>
    </MainLayout>
  )
}

export default Home;