import {colors} from "@/configs/index";
import {Container, Title, Text} from '@/styledComponents';
import {
  AdvantagesSections,
  Advantage,
  AdvantageImage,
  AdvantageInfo,
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
            <Title 
              as='h3' 
              color={colors.secondary_dark} 
              marginB='15px' 
              advantageTitle
            >
              PASSIONATE
            </Title>
            <Text color={colors.secondary_dark} advanageText>
              Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
            </Text>
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
            <Title 
              as='h3' 
              color={colors.secondary_dark} 
              marginB='15px' 
              advantageTitle
            >
              RESOURCEFUL
            </Title>
            <Text color={colors.secondary_dark} advanageText>
              Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
            </Text>
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
            <Title 
              as='h3' 
              color={colors.secondary_dark} 
              marginB='15px' 
              advantageTitle
            >
              FRIENDLY
            </Title>
            <Text color={colors.secondary_dark} advanageText>
              We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
            </Text>
          </AdvantageInfo>
        </Advantage>
      </AdvantagesSections>
    </Container>
  )
}

export default Advantages;