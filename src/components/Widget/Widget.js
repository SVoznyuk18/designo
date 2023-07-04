import Link from 'next/link';
import {ClassicButton} from '@/components'
import {WidgetSection, InfoWrapper,  WidgetTitle, WidgetSubTitle} from './StyledComponents';

const Widget = () => {
  return (
    <WidgetSection>
      <InfoWrapper>
        <WidgetTitle>Let’s talk about your project</WidgetTitle>
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