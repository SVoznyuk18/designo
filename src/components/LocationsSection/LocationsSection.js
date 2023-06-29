import {Container} from '@/styledComponents';
import {LocationCard} from '@/components';

import {Locations, LocationsContent} from './StyledConponents';
import australia from "@/public/locations/australia.svg";
import canada from "@/public/locations/canada.svg";
import unitedKingdom from "@/public/locations/unitedKingdom.svg";

const LocationsSection = () => {
  return (
    <Locations>
      <Container>
        <LocationsContent>
          <LocationCard
            image={canada}
            alt='canada_img'
            title='canada'
            btnTitle='SEE LOCATION'
          />
          <LocationCard
            image={australia}
            alt='australia_img'
            title='australia'
            btnTitle='SEE LOCATION'
          />
          <LocationCard
            image={unitedKingdom}
            alt='unitedKingdom_img'
            title='united kingdom'
            btnTitle='SEE LOCATION'
          />
        </LocationsContent>
      </Container>
    </Locations>
  )
}

export default LocationsSection;