import { AstronautIllustration, Container, FirstTitle, Header, HeaderMain, IconsContainer, SecondTitle, Subtitle } from './styles'
import { BsTranslate } from 'react-icons/bs'
import { pixelToRem } from '../../utils/pixelToRemFunction'
import { Button } from '../../components/Button'
import { Icon } from '../../components/Icon'
import { I18nContext, useTranslation } from 'react-i18next'
import { IconContainer, Logo, TranslateButton, TranslateText } from '../../styles/styles'
import i18n from '../../configuration/translator'

export function FirstSection() {
    const { t } = useTranslation();

    const changeLanguage = () => {
      const currentLanguage = i18n.language;

      if(currentLanguage == 'en'){
        i18n.changeLanguage('pt');
      }
      else{
        i18n.changeLanguage('en');
      }
    };
    
  return (
    <Container flex='column' margin={ pixelToRem(24, 112, 500, 100) }> 
        <Header>
          <Logo />

          <IconContainer>
            <TranslateButton onClick={() => changeLanguage()}>
              <TranslateText>{i18n.language == 'en' ? 'Traduzir (pt-Br)' : 'Translate (en)'}</TranslateText>
            </TranslateButton>
            
            <BsTranslate size={30} style={{color: '#E85937'}}/>
          </IconContainer>
        </Header>

        <HeaderMain>
          <FirstTitle>{t('finally')}</FirstTitle>

            <SecondTitle>{t('journey')}<span>.</span></SecondTitle>

            <AstronautIllustration />
            
           
          <Subtitle>{t('list')}</Subtitle>
         
        </HeaderMain>
        
        <Button title={t('now')} fullwidth={false}/>

        <IconsContainer>
          <Icon src="/images/icon-rocket.svg" text={t('rockets')} alt='Rocket'/>

          <Icon src="/images/icon-flag.svg" text={t('successful')} alt='Flag'/>

          <Icon src="/images/icon-telescope.svg" text={t('experience')} alt='Telescope'/>
        </IconsContainer>

      </Container>
  )
}
