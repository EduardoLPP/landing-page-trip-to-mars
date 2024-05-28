import { useTranslation } from "react-i18next";
import { Logo } from "../../styles/styles";
import { ContainerFooterBottom, ContainerFooterLogo, ContainerFooterMenu, ContainerImageSmoke, ContainerSocialMedia, SectionFooter } from "./styles";

export function FooterSection() {
    const { t, i18n } = useTranslation();
    
  return (
    <SectionFooter>
    <ContainerImageSmoke
      whileInView="visible"
      initial="initial"
      viewport={{ once: true }}
      variants={{
        initial: { opacity: 0, y: 0 },
        visible: {
          opacity: 1,
          y: -100,
          transition: { duration: 0.7, delay: 0.9 },
        },
      }}>

      <img src="/images/smoke.svg" alt="" />
    </ContainerImageSmoke>

    <ContainerFooterBottom>
      <ContainerFooterLogo>
        <Logo />
      </ContainerFooterLogo>

      <ContainerSocialMedia>
        <a href="https://www.instagram.com/edpasso/">
          <img src="/images/instagram.svg" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/eduardo-leonardo-275b0118a/">
          <img src="/images/linkedin.svg" alt="" />
        </a>
        
        <img src="/images/facebook.svg" alt="" />
      </ContainerSocialMedia>

      <ContainerFooterMenu>
        <ul>
          <li><a href="/">{t('home')}</a></li>
          <li><a href="/">{t('about')}</a></li>
          <li><a href="/">{t('missions')}</a></li>
          <li><a href="/">{t('contact')}</a></li>
        </ul>
      </ContainerFooterMenu>
    </ContainerFooterBottom>  
  </SectionFooter>
  )
}
