import Image from "next/image";
import PropTypes from 'prop-types';

import { Card, ImageWrapper, CardInfoSection, CardTitle, CardDescr} from './StyledComponents';

const ProjectCard = ({project}) => {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={project?.image}
          alt={project?.title}
          fill={true}
          placeholder='blur'
          blurDataURL='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v3Z2PQAHwgLItQaUHgAAAABJRU5ErkJggg=='
        />
      </ImageWrapper>
      <CardInfoSection>
      <CardTitle>{project?.title}</CardTitle>
      <CardDescr>{project?.descr}</CardDescr>
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