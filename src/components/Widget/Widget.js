import Link from 'next/link';

import {ClassicButton} from '@/components'
import {WidgetSection, InfoWrapper} from './StyledComponents';
import {Title, Text} from '@/styledComponents'

const Widget = () => {
  return (
    <WidgetSection>
      <InfoWrapper>
        <Title 
          as='h2' 
          textAlign='left' 
          marginB='20px' 
          widjetTitle
        >
          Let’s talk about your project
        </Title>
        <Text 
          textAlign='left' 
          marginB='32px' 
          width='460px'
        >
          Ready to take it to the next level? Contact us today and find out 
          how our expertise can help your business grow.
        </Text>
      </InfoWrapper>
      <Link href='/contact'>
        <ClassicButton variant='light'>Get in touch</ClassicButton>
      </Link>
    </WidgetSection>
  )
}

export default Widget;