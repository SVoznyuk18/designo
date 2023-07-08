import Link from 'next/link';
import {ClassicButton} from '@/components'
import {WidgetSection, InfoWrapper, WidgetSubTitle} from './StyledComponents';

import {Title} from '@/styledComponents'

const Widget = () => {
  return (
    <WidgetSection>
      <InfoWrapper>
        <Title as='h2' textAlign='left' marginB='20px' widjetTitle >Let’s talk about your project</Title>
        <WidgetSubTitle>Ready to take it to the next level? Contact us today and find out 
            how our expertise can help your business grow.</WidgetSubTitle>
      </InfoWrapper>
      <Link href='/contact'>
        <ClassicButton variant='light'>Get in touch</ClassicButton>
      </Link>
      
    </WidgetSection>
  )
}

export default Widget;