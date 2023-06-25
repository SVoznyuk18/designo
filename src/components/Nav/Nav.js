import Link from 'next/link';
import { useState } from 'react';
import PropTypes from 'prop-types';

import {MenuButton, Navigation, NavigationList, NavigationItem} from './StyledComponents';

const Nav = ({popUpMenu}) => {

  const navList = [
    {
      id: 1,
      href:'',
      title: 'OUR COMPANY'
    },
    {
      id: 2,
      href:'',
      title: 'LOCATIONS'
    },
    {
      id: 3,
      href:'',
      title: 'CONTACT'
    },
  ]
  const [toggleMenu, setToggleMenu] = useState(false);
  return (

    <Choose>
      <When condition={popUpMenu}>
        <>
          <MenuButton 
            activeMenu={toggleMenu}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </MenuButton>
          <Navigation  popUpMenu={popUpMenu} active={toggleMenu}>
            <NavigationList popUpMenu={popUpMenu}>
              {
                navList && navList.map((link) => (
                  <NavigationItem active={toggleMenu} popUpMenu={popUpMenu}  key={link.id}>
                    <Link href={link.href}>{link.title}</Link>
                  </NavigationItem>
                ))
              }
            </NavigationList>
          </Navigation>
        </>
      </When>
      <Otherwise>
        <Navigation  popUpMenu={popUpMenu} active={toggleMenu}>
          <NavigationList popUpMenu={popUpMenu}>
            {
              navList && navList.map((link) => (
                <NavigationItem active={toggleMenu} popUpMenu={popUpMenu} key={link.id}>
                  <Link href={link.href}>{link.title}</Link>
                </NavigationItem>
              ))
            }
          </NavigationList>
        </Navigation>

      </Otherwise>
    </Choose>
  );
};

Nav.propTypes = {
  popUpMenu: PropTypes.bool,
}

Nav.defaultProps = {
  popUpMenu: false,
}

export default Nav;