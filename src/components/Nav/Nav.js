import Link from 'next/link';
import { useState } from 'react';
import styles from './nav.module.scss';

const Nav = () => {

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
    <>
      <div 
        className={`${styles.menu_btn} ${toggleMenu && styles.menu_btn__active}`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`${styles.nav} ${toggleMenu && styles.nav__active}`}>
        <ul className={styles.nav_list}>
          {
            navList && navList.map((link) => (
              <li key={link.id} className={`${styles.nav_link } ${toggleMenu && styles.nav_link__active}`}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  );
}

export default Nav;