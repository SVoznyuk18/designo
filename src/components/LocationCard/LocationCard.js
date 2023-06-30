import Image from "next/image";
import PropTypes from 'prop-types';

import {Card, WrapperInfo, Title, ContactsSection, Contact, ContactTitle, WrapperImage} from './StyledComponents';

import australia from "@/public/locations/australia.png";

const LocationCard = () => {
return (
    <Card>
      <WrapperInfo>
        <Title>Canada</Title>
        <ContactsSection>
          <Contact>
            <ContactTitle>Designo Central Office</ContactTitle>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </Contact>
          <Contact>
            <ContactTitle>Contact Us (Central Office)</ContactTitle>
            <p>P : <a href='+12538638967'>+1 253-863-8967</a></p> 
            <p>M : <a href='mailto:contact@designo.co'>contact@designo.co</a></p> 
          </Contact>
        </ContactsSection>
      </WrapperInfo>
      <WrapperImage>
        <Image
          src={australia}
          alt='image_australia'
          fill
          style={{objectFit: 'cover'}}
        />
      </WrapperImage>
    </Card>
  )
}

export default LocationCard;