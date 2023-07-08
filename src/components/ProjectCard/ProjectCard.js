import Image from "next/image";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";

import {colors} from "@/configs/index";
import { Card, ImageWrapper, CardInfoSection} from './StyledComponents';
import {Title, Text} from '@/styledComponents';

const ProjectCard = ({project}) => {

  const {pathname} = useRouter();

  return (
    <Card href={`${pathname}/${project?.page}`}>
      <ImageWrapper >
        <Image
          src={project?.image}
          alt={project?.title}
          fill={true}
          style={{objectFit: "cover"}}
          placeholder='blur'
          blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v3Z2PQAHwgLItQaUHgAAAABJRU5ErkJggg=='
        />
      </ImageWrapper>
      <CardInfoSection>
      <Title as='h3' projectCardTitle marginB='16px'>{project?.title}</Title>
      <Text color={colors.secondary_dark}>{project?.descr}</Text>
      </CardInfoSection>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    descr: PropTypes.string,
    image: PropTypes.string,
  }).isRequired
}

export default ProjectCard;