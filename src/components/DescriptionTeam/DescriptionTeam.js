import Image from "next/image";
import PropTypes from 'prop-types';

import {DescriptionSection, MainContent, Wrapper, Title, SubTitle, WrapperImage} from './StyledComponents';

const DescriptionTeam = ({title, subTitle, image, alt, variant}) => {
  return (
    <DescriptionSection>
      <MainContent>
        <Wrapper variant={variant}>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Wrapper>
        <WrapperImage variant={variant}>
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
    </DescriptionSection>
  );
}

DescriptionTeam.propTypes = {
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
  
DescriptionTeam.defaultProps = {
  title: '',
  subTitle: '',
  variant: 'default',
}
  
export default DescriptionTeam;