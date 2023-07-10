import dynamic from "next/dynamic";

const Form = dynamic(() => import('../../components/Form/Form'), {loading: () => <p>Loading...</p>});
const CountriesSection = dynamic(() => import('../../components/CountriesSection/CountriesSection'), {loading: () => <p>Loading...</p>});

import {ContactSection, Info, Wrapper} from './StyledComponents';
import {Title, Text} from '@/styledComponents'

const Contact = () => {
  return (
    <>
      <ContactSection>
        <Wrapper>
          <Info>
            <Title marginB='32px' textAlign='left'>Contact Us</Title>
            <Text 
              textAlign='left' 
              marginB='48px'
            >
              Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
            </Text>
          </Info>
          <Form/>
        </Wrapper>
      </ContactSection>
      <CountriesSection/>
    </>
  )
}

export default Contact;