import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import('@/layout/MainLayout'));
const Form = dynamic(() => import('../../components/Form/Form'), {loading: () => <p>Loading...</p>});
const CountriesSection = dynamic(() => import('../../components/CountriesSection/CountriesSection'), {loading: () => <p>Loading...</p>});

import {ContactSection, Title, SubTitle, Info, Wrapper} from './StyledComponents';

const Contact = () => {
  return (
    <MainLayout>
      <ContactSection>
        <Wrapper>
          <Info>
            <Title>Contact Us</Title>
            <SubTitle>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</SubTitle>
          </Info>
          <Form/>
        </Wrapper>
      </ContactSection>
      <CountriesSection/>
    </MainLayout>
  )
}

export default Contact;