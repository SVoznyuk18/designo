import Image from "next/image";
import PropTypes from 'prop-types';

import {ClassicButton} from '@/components'
import {Card, Title} from './StyledComponents';

const CountryCard = ({image, alt, title, btnTitle}) => {
  return (
    <Card>
      <Image
        src={image}
        alt={alt}
        width={200}
        height={200}
      />
      <Title>{title}</Title>
      <ClassicButton variant='peach'>{btnTitle}</ClassicButton>
    </Card>
  )
}

CountryCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    blurDataURL: PropTypes.string,
    blurHeight: PropTypes.number,
    blurWidth: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  alt: PropTypes.string.isRequired,
  btnTitle: PropTypes.string,
}

CountryCard.defaultProps = {
  title: '',
  btnTitle: '',
}

export default CountryCard;