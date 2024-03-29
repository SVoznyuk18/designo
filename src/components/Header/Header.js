import Image from 'next/image';
import Link from 'next/link';

import {Container} from '@/styledComponents';
import {HeaderSection, HeaderContent, LogoSection, LogoTitle} from './StyledComponents';
import {Nav} from '@/components';

import logo from '@/public/header/logo.svg'

const Header = () => {
  return (
    <HeaderSection>
      <Container>
        <HeaderContent>
          <Link href="/">
            <LogoSection>
              <Image
                src={logo}
                width={24}
                height={24}
                alt='logo_img'
              />
              <LogoTitle>DESIGNO</LogoTitle>
            </LogoSection>
          </Link>
          
          <Nav popUpMenu/>
        </HeaderContent>
      </Container>
    </HeaderSection>
  );
}

export default Header;