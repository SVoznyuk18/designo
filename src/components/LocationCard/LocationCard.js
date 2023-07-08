import Image from "next/image";
import PropTypes from 'prop-types';

import {Card, WrapperInfo, ContactsSection, Contact, ContactTitle,  WrapperImage} from './StyledComponents';
import { Title } from '@/styledComponents'
const LocationCard = ({image, alt, title, location, variant}) => {
return (
    <Card>
      <WrapperInfo variant={variant}>
        <Title as='h2' textAlign='left' marginB='24px' locationTitle >{title}</Title>
        <ContactsSection >
          <Contact>
            <ContactTitle>{location.adressTitle}</ContactTitle>
            <p>{location.adress}</p>
          </Contact>
          <Contact>
            <ContactTitle>{location.contactTitle}</ContactTitle>
            <p>P : <a href={location.hrefPhone}>{location.phone}</a></p> 
            <p>M : <a href={`mailto:${location.mail}`}>{location.mail}</a></p> 
          </Contact>
        </ContactsSection>
      </WrapperInfo>
      <WrapperImage variant={variant}>
        <Image
          src={image}
          alt={alt}
          fill
          style={{objectFit: 'cover'}}
        />
      </WrapperImage>
    </Card>
  )
}

LocationCard.propTypes = {
  image: PropTypes.shape({
    blurDataURL: PropTypes.string,
    blurHeight: PropTypes.number,
    blurWidth: PropTypes.number,
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  location: PropTypes.shape({
    adressTitle: PropTypes.string,
    adress: PropTypes.string,
    contactTitle: PropTypes.string,
    phone: PropTypes.string,
    hrefPhone: PropTypes.string,
    mail: PropTypes.string
  }).isRequired,
  variant: PropTypes.string,
}

LocationCard.defaultProps = {
  title: '',
  variant: 'default',
}

export default LocationCard;