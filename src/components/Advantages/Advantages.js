import {Container} from '@/styledComponents';

import {
  AdvantagesSections,
  Advantage,
  AdvantageImage,
  AdvantageInfo,
  AdvantageTitle,
  AdvantageDescr
  } from './StyledComponents';

import friendly from "@/public/home/friendly.svg";
import passionate from "@/public/home/passionate.svg";
import resourceful from "@/public/home/resourceful.svg";

const Advantages = () => {
  return (
    <Container>
      <AdvantagesSections>
        <Advantage>
          <AdvantageImage
            src={passionate}
            alt='passionate'
            width={200}
            height={200}
          />
          <AdvantageInfo>
            <AdvantageTitle>PASSIONATE</AdvantageTitle>
            <AdvantageDescr>
              Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
            </AdvantageDescr>
          </AdvantageInfo>
        </Advantage>
        <Advantage>
          <AdvantageImage
            src={resourceful}
            alt='resourceful'
            width={200}
            height={200}
          />
          <AdvantageInfo>
            <AdvantageTitle>RESOURCEFUL</AdvantageTitle>
            <AdvantageDescr>
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
            </AdvantageDescr>
          </AdvantageInfo>
        </Advantage>
        <Advantage>
          <AdvantageImage
            src={friendly}
            alt='friendly'
            width={200}
            height={200}
          />
          <AdvantageInfo>
            <AdvantageTitle>FRIENDLY</AdvantageTitle>
            <AdvantageDescr>
              We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
            </AdvantageDescr>
          </AdvantageInfo>
        </Advantage>
      </AdvantagesSections>
    </Container>
  )
}

export default Advantages;