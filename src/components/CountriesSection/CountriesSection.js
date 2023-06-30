import {Container} from '@/styledComponents';
import {CountryCard} from '@/components';

import {Countries, CountriesContent} from './StyledConponents';
import australia from "@/public/countries/australia.svg";
import canada from "@/public/countries/canada.svg";
import unitedKingdom from "@/public/countries/unitedKingdom.svg";

const CountriesSection = () => {
  return (
    <Countries>
      <Container>
        <CountriesContent>
          <CountryCard
            image={canada}
            alt='canada_img'
            title='canada'
            btnTitle='SEE LOCATION'
          />
          <CountryCard
            image={australia}
            alt='australia_img'
            title='australia'
            btnTitle='SEE LOCATION'
          />
          <CountryCard
            image={unitedKingdom}
            alt='unitedKingdom_img'
            title='united kingdom'
            btnTitle='SEE LOCATION'
          />
        </CountriesContent>
      </Container>
    </Countries>
  )
}

export default CountriesSection;