
import { AboutMain, Container, ContainerAbout, ContainerLogo, DivLogo, FirstTitle, GalleryContent, ImageMars, SecondSubTitle, SectionAbout, TextAbout, TextLogo, TextSubscribe } from './styles'
import { Logo } from '../../styles/styles'
import { Gallery } from '../../components/Gallery/Index'
import { useTranslation } from 'react-i18next';

export function SecondSection() {
    const { t, i18n } = useTranslation();
    
  return (
    <SectionAbout flex="column">
    <Container width='100%'>

      <ContainerAbout flex='row'>
        <ImageMars/>
      
        <AboutMain margin='0 auto'>
          <FirstTitle>{t('why')}</FirstTitle>

          <SecondSubTitle>{t('about-mars')}</SecondSubTitle>

          <TextAbout>{t('mars')}</TextAbout>

          <TextAbout>{t('gravity')}</TextAbout>
        </AboutMain>

        </ContainerAbout>
      </Container>

      <GalleryContent>
        <ContainerLogo>
          <DivLogo>
            <Logo/>
          </DivLogo>
          
          <TextLogo>{t('humanity')} <span>.</span></TextLogo>
        
          <TextSubscribe>{t('signup')}</TextSubscribe>
        </ContainerLogo>
            
        <Gallery />
      </GalleryContent>

</SectionAbout>
  )
}
