import Image from 'next/image';
import Link from 'next/link';

import {Container} from '@/styledComponents';
import {Nav, SocialIcon, Widget } from '@/components';
import {
    FooterSection, 
    FooterTopContent, 
    LogoSection, 
    LogoTitle, 
    FooterBottomContent, 
    ContactsSection, 
    Contact, 
    ContactTitle, 
    SocialSection
} from './StyledComponents';

import logo from '@/public/header/logo.svg'
import facebook from '@/public/socialSvg/facebook.svg'
import youtube from '@/public/socialSvg/youtube.svg'
import twitter from '@/public/socialSvg/twitter.svg'
import pinterest from '@/public/socialSvg/pinterest.svg'
import instagram from '@/public/socialSvg/instagram.svg'

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterTopContent>
          <Link href='/'>
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
          <Nav/>
        </FooterTopContent>
        <FooterBottomContent>
          <ContactsSection>
              <Contact>
                <ContactTitle>Designo Central Office</ContactTitle>
                <p>3886 Wellington Street</p>
                <p>Toronto, Ontario M9C 3J5</p>
              </Contact>
              <Contact>
                <ContactTitle>Contact Us (Central Office)</ContactTitle>
                <p>P : <a href='+12538638967'>+1 253-863-8967</a></p> 
                <p>M : <a href='mailto:contact@designo.co'>contact@designo.co</a></p> 
              </Contact>
          </ContactsSection>
          <SocialSection>
            <SocialIcon
              href='https://uk-ua.facebook.com/'
              style={{textDecoration: 'none'}}
              src={facebook}
              width={24}
              height={24}
              alt='facebook_img'
            />
            <SocialIcon
              href='https://www.youtube.com/'
              style={{textDecoration: 'none'}}
              src={youtube}
              width={24}
              height={24}
              alt='youtube_img'
            />
            <SocialIcon
              href='https://twitter.com/'
              style={{textDecoration: 'none'}}
              src={twitter}
              width={24}
              height={24}
              alt='twitter_img'
            />
            <SocialIcon
              href='https://pinterest.com/'
              style={{textDecoration: 'none'}}
              src={pinterest}
              width={24}
              height={24}
              alt='pinterest_img'
            />
            <SocialIcon
              href='https://www.instagram.com/'
              style={{textDecoration: 'none'}}
              src={instagram}
              width={24}
              height={24}
              alt='instagram_img'
            />
          </SocialSection>
        </FooterBottomContent>
        <Widget/>              
      </Container>
    </FooterSection>
  );
};

export default Footer;