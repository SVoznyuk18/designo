import PropTypes from 'prop-types';

import {Main, MainContent, Title, SubTitle} from './StyledComponents';

const MainSection = ({title, subtitle}) => {
  return (
    <Main>
      <MainContent>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </MainContent>  
    </Main>
  );
}

MainSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

MainSection.defaultProps = {
  title: '',
  subtitle: '',
}

export default MainSection;