import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';
import { useRouter } from "next/router";

import { Card, ImageWrapper, CardInfoSection, CardTitle, CardDescr} from './StyledComponents';

const ProjectCard = ({project}) => {

  const {pathname} = useRouter();

  return (
    <Card>
      <Link href={`${pathname}/${project?.page}`}>
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
      </Link>
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