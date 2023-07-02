import {WidgetSection, InfoWrapper,  WidgetTitle, WidgetSubTitle, Button} from './StyledComponents';

const Widget = () => {
  return (
    <WidgetSection>
      <InfoWrapper>
        <WidgetTitle>Let’s talk about your project</WidgetTitle>
        <WidgetSubTitle>Ready to take it to the next level? Contact us today and find out 
            how our expertise can help your business grow.</WidgetSubTitle>
      </InfoWrapper>
      <Button>Get in touch</Button>
    </WidgetSection>
  )
}

export default Widget;