import PropTypes from 'prop-types';
import Image from 'next/image';
import {Main, MainContent, Wrapper, WrapperImage, Title, SubTitle} from './StyledComponents';

import about from "@/public/about/about.jpg";

const MainSection = ({title, subtitle, variant}) => {
  return (
    <Main>
      <Choose>
        <When condition={variant === 'horizontal'}>
          <MainContent variant='horizontal'>
          <WrapperImage>
              <Image
                src={about}
                fill
                alt='about_page'
                style={{objectFit: 'cover'}}
                placeholder='blur'
                blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v3Z2PQAHwgLItQaUHgAAAABJRU5ErkJggg=='
              />
            </WrapperImage>
            <Wrapper variant='horizontal'>
              <Title variant='horizontal'>{title}</Title>
              <SubTitle variant='horizontal'>{subtitle}</SubTitle>
            </Wrapper>
          </MainContent>  
        </When>
        <Otherwise>
          <MainContent>
            <Wrapper>
              <Title>{title}</Title>
              <SubTitle>{subtitle}</SubTitle>
            </Wrapper>
          </MainContent>  
        </Otherwise>
      </Choose>
    </Main>
  );
}

MainSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  variant: PropTypes.string,
}

MainSection.defaultProps = {
  title: '',
  subtitle: '',
  variant: 'default',
}

export default MainSection;