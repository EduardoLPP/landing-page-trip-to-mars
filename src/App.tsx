import { GlobalStyles } from './styles/globalstyles';
import { Container, Header, Logo, HeaderMain, FirstTitle, Subtitle, SecondTitle, AstronautIllustration, IconsContainer, SectionAbout, ImageMars, AboutMain,
SecondSubTitle, TextAbout, Gallery, ContainerAbout, TextLogo, TextSubscribe, ContainerLogo} from './styles/styles';
import { Button } from './components/Button';
import { Icon } from './components/Icon';
import { pixelToRem } from './utils/pixelToRemFunction';

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Container flex='column' margin={ pixelToRem(24, 112, 50) }> 
        <Header>
          <Logo />  
        </Header>

        <HeaderMain>
          <FirstTitle>Finalmente é possível</FirstTitle>

            <SecondTitle>Sua jornada para Marte começa aqui<span>.</span></SecondTitle>

            <AstronautIllustration />

          <Subtitle>A primeira viagem estará disponível apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera</Subtitle>
         
        </HeaderMain>
        
        <Button title='Inscreva-se agora' fullwidth={false}/>

        <IconsContainer>
          <Icon src="/images/icon-rocket.svg" text="Foguetes com a mais alta texnologia e conforto" alt='Rocket'/>

          <Icon src="/images/icon-flag.svg" text="Mais de 100 missões consecutivas com sucesso" alt='Flag'/>

          <Icon src="/images/icon-telescope.svg" text="Experiência única e exlusiva" alt='Telescope'/>
        </IconsContainer>

      </Container>

      <SectionAbout flex="column">
        <Container flex="row" width='100%'>

          <ContainerAbout flex="row">
            <ImageMars/>
            
              <AboutMain margin='0 auto'>
                <FirstTitle>Por que Marte?</FirstTitle>

                <SecondSubTitle>Sobre o planeta vermermelho</SecondSubTitle>

                <TextAbout>A uma distância média de 140 milhões de milhas, Marte é um
                  dos vizinhos habitáveis mais próximos da Terra. Marte está mais ou
                  menos metade da distância da Terra do Sol, então ainda tem luz
                  solar descente. Está um pouco frio, mas podemos esquentar. Sua 
                  atmosfera é composta principalmente de CO2 com um pouco de nitrogênio
                  e arg^nio e alguns outros oligoelementos, o que significa que podemos 
                  cultivar plantas em Marte apenas comprimindo a atmosfera. 
                </TextAbout>

                <TextAbout>A gravidade em Marte é cerca de 38% da da Terra, então você
                  seria capaz de levantar coisas pesadas e dar voltas. Além disso, o 
                  o dia está notavelmente próximo ao da terra.
                </TextAbout>
              </AboutMain>

            </ContainerAbout>
          </Container>

          
          <ContainerLogo>
            <Logo />

            <TextLogo>
              O caminho para tornar a humanidade multiplanetária <span>.</span>
            </TextLogo>
          
            <TextSubscribe>
              Inscreva-se
            </TextSubscribe>
          </ContainerLogo>
                
          <Gallery flex="column">
          
          </Gallery>
        </SectionAbout>

    </>
  );
}

export default App;
