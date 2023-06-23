import Image from 'next/image';

import styles from './header.module.scss'
import Nav from '@/components/Nav/Nav';
import logo from '@/public/header/logo.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header_content}>
          <div className={styles.logo_section}>
            <Image
              src={logo}
              width={24}
              height={24}
              alt='logo_img'
              className={styles.logo_img}
            />
            <span className={styles.logo_title}>DESIGNO</span>
          </div>
          <Nav/>
        </div>
      </div>
    </header>
  );
}

export default Header;