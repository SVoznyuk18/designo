import PropTypes from 'prop-types';

import {Button} from './StyledComponents';

const ClassicButton = ({variant, children}) => {
  return (
    <Button variant={variant}>
      {children}
    </Button>
  )
}

ClassicButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

ClassicButton.defaultProps = {
  variant: 'default',
}
  
export default ClassicButton;
