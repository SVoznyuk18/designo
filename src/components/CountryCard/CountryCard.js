import Image from "next/image";
import PropTypes from 'prop-types';

import {colors} from "@/configs/index";
import {ClassicButton} from '@/components'
import {Card} from './StyledComponents';
import {Title} from '@/styledComponents'

const CountryCard = ({image, alt, title, btnTitle}) => {
  return (
    <Card>
      <Image
        src={image}
        alt={alt}
        width={200}
        height={200}
        style={{marginBottom: '45px'}}
      />
      <Title 
        as='h3' 
        coutryCardTitle 
        marginB='30px' 
        color={colors.secondary_dark}
      >
        {title}
      </Title>
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