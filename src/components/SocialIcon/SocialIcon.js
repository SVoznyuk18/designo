import Image from 'next/image';
import PropTypes from 'prop-types';

const SocialIcon = ({href, style, src, width, height, alt}) => {
  return (
    <a
      href={href}
      style={style}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </a>
  )
}

SocialIcon.propTypes = {
  href: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    blurWidth: PropTypes.number,
    blurHeight: PropTypes.number,
  }).isRequired, 
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string.isRequired,
}
  
SocialIcon.defaultProps = {
  href: '',
  style: {},
  width: 24,
  height: 24,
}

export default SocialIcon;