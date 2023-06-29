import Image from "next/image";
import PropTypes from 'prop-types';

import {Card, Title, Button} from './StyledComponents';

const LocationCard = ({image, alt, title, btnTitle}) => {
    return (
        <Card>
            <Image
                src={image}
                alt={alt}
                width={200}
                height={200}
            />
            <Title>{title}</Title>
            <Button>{btnTitle}</Button>
        </Card>
    )
}

export default LocationCard;