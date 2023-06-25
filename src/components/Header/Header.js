import Image from 'next/image';

// import styles from './header.module.scss'
import {Container} from '../../styledComponents/index';
import {HeaderSection, HeaderContent, LogoSection, LogoTitle} from './StyledComponents';
import Nav from '@/components/Nav/Nav';
import logo from '@/public/header/logo.svg'

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderContent>
          <LogoSection>
            <Image
              src={logo}
              width={24}
              height={24}
              alt='logo_img'
            />
            <LogoTitle>DESIGNO</LogoTitle>
          </LogoSection>
          <Nav popUpMenu/>
        </HeaderContent>
      </Container>
    </HeaderSection>
  );
}

export default Header;