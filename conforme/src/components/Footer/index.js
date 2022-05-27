import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia, SocialMediaWrap, SocialLogo,
    WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
            
               <SocialLogo to ={"/"}> DefensyLab</SocialLogo>
               <WebsiteRights> Conforme  © Tous droits réservés 2022</WebsiteRights>
               <SocialIcons>
                 <SocialIconLink href="/" target="_blank"
                 aria-label="Facebook">
                 <FaFacebook />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="_blank"
                 aria-label="Instagram">
                 <FaInstagram />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="_blank"
                 aria-label="YouTube">
                 <FaYoutube />
                 </SocialIconLink>
                 <SocialIconLink href="/" target="_blank"
                 aria-label="Linkedin">
                 <FaLinkedin />
                 </SocialIconLink>
               </SocialIcons>
               </SocialMediaWrap>
          </SocialMedia>

        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer