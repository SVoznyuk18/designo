import PropTypes from 'prop-types';
import Image from 'next/image';

import {Main, MainContent, Wrapper, WrapperImage, SubTitle} from './StyledComponents';
import {Title, Text} from '@/styledComponents'

const MainSection = ({title, image, alt, subTitle, variant}) => {
  return (
    <Main>
      <Choose>
        <When condition={variant === 'withImg'}>
          <MainContent variant={variant}>
            <Wrapper variant={variant}>
              <Title textAlign='left' marginB='30px'>{title}</Title>
              <Text fontSize='16px' textAlign='left' >{subTitle}</Text>
            </Wrapper>
            <WrapperImage>
              <Image
                src={image}
                fill
                alt={alt}
                style={{objectFit: 'cover'}}
                placeholder='blur'
                blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v3Z2PQAHwgLItQaUHgAAAABJRU5ErkJggg=='
              />
            </WrapperImage>
          </MainContent>  
        </When>
        <Otherwise>
          <MainContent>
            <Wrapper>
              <Title marginB='30px' >{title}</Title>
              <Text fontSize='16px'>{subTitle}</Text>
            </Wrapper>
          </MainContent>  
        </Otherwise>
      </Choose>
    </Main>
  );
}

MainSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  image: PropTypes.shape({
    blurDataURL: PropTypes.string,
    blurHeight: PropTypes.number,
    blurWidth: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  alt: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

MainSection.defaultProps = {
  title: '',
  subTitle: '',
  variant: 'default',
}

export default MainSection;