import {LocationCard} from '@/components';

import {Location} from './StyledComponents';

import canada from "@/public/locations/canada.png";
import australia from "@/public/locations/australia.png";
import unitedKingdom from "@/public/locations/unitedKingdom.png";

const LocationsSection = () => {
  return (
    <Location>
      <LocationCard
        image={canada}
        alt='img_canada'
        title='Canada'
        location={
          {
            adressTitle: 'Designo Central Office',
            adress: `3886 Wellington Street <br/> Toronto, Ontario M9C 3J5`,
            contactTitle: 'Contact',
            phone: '+1 253-863-8967',
            hrefPhone: '+12538638967',
            mail: 'contact@designo.co'         
          }
        }
      />
      <LocationCard
        image={australia}
        alt='img_australia'
        title='Australia'
        location={
          {
            adressTitle: 'Designo AU Office',
            adress: `19 Balonne Street <br/> New South Wales 2443`,
            contactTitle: 'Contact',
            phone: '(02) 6720 9092',
            hrefPhone: '+0267209092',
            mail: 'contact@designo.au'         
          }
        }
        variant='imageLeft'
      />

      <LocationCard
        image={unitedKingdom}
        alt='img_unitedKingdom'
        title='United Kingdom'
        location={
          {
            adressTitle: 'Designo UK Office',
            adress: `13 Colorado Way <br/> Rhyd-y-fro SA8 9GA`,
            contactTitle: 'Contact',
            phone: '078 3115 1400',
            hrefPhone: '+07831151400',
            mail: 'contact@designo.uk'         
          }
        }
      />
    </Location>
  )
}

export default LocationsSection;