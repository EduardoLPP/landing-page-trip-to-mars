import { GlobalStyles } from './styles/globalstyles';
import { Container, Header, Logo, HeaderMain, FirstTitle, Subtitle, SecondTitle, AstronautIllustration, IconsContainer, SectionAbout, ImageMars, AboutMain,
SecondSubTitle, TextAbout, ContainerAbout, TextLogo, TextSubscribe, ContainerLogo, DivLogo, GalleryContent, SectionForm, DivRocketImage, RocketImage,
SectionFooter,
ContainerImageSmoke,
ContainerFooterBottom,
ContainerSocialMedia,
ContainerFooterMenu,
ContainerFooterLogo} from './styles/styles';
import { Button } from './components/Button';
import { Icon } from './components/Icon';
import { pixelToRem } from './utils/pixelToRemFunction';
import { Gallery } from './components/Gallery/Index';
import { Form } from './components/Form';

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Container flex='column' margin={ pixelToRem(24, 112, 500, 100) }> 
        <Header>
          <Logo />  
        </Header>

        <HeaderMain>
          <FirstTitle>Finalmente é possível</FirstTitle>

            <SecondTitle>Sua jornada para Marte começa aqui <span>.</span></SecondTitle>

            <AstronautIllustration />

          <Subtitle>A primeira viagem estará disponível apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera</Subtitle>
         
        </HeaderMain>
        
        <Button title='Inscreva-se agora' fullwidth={false}/>

        <IconsContainer>
          <Icon src="/images/icon-rocket.svg" text="Foguetes com a mais alta tecnologia e conforto" alt='Rocket'/>

          <Icon src="/images/icon-flag.svg" text="Mais de 100 missões consecutivas com sucesso" alt='Flag'/>

          <Icon src="/images/icon-telescope.svg" text="Experiência única e exlusiva" alt='Telescope'/>
        </IconsContainer>

      </Container>

      <SectionAbout flex="column">
          <Container width='100%'>

            <ContainerAbout flex='row'>
              <ImageMars/>
            
              <AboutMain margin='0 auto'>
                <FirstTitle>Por que Marte?</FirstTitle>

                <SecondSubTitle>Sobre o planeta vermelho</SecondSubTitle>

                <TextAbout>A uma distância média de 140 milhões de milhas, Marte é um
                  dos vizinhos habitáveis mais próximos da Terra. Marte está mais ou
                  menos metade da distância da Terra do Sol, então ainda tem luz
                  solar descente. Está um pouco frio, mas podemos esquentar. Sua 
                  atmosfera é composta principalmente de CO2 com um pouco de nitrogênio
                  e argônio e alguns outros oligoelementos, o que significa que podemos 
                  cultivar plantas em Marte apenas comprimindo a atmosfera. 
                </TextAbout>

                <TextAbout>A gravidade em Marte é cerca de 38% da da Terra, então você
                  seria capaz de levantar coisas pesadas e dar voltas. Além disso, o 
                  o dia está notavelmente próximo ao da terra.
                </TextAbout>
              </AboutMain>

              </ContainerAbout>
            </Container>

            <GalleryContent>
              <ContainerLogo>
                <DivLogo>
                  <Logo/>
                </DivLogo>
                
                <TextLogo>
                  O caminho para tornar a humanidade multiplanetária <span>.</span>
                </TextLogo>
              
                <TextSubscribe>
                  Inscreva-se
                </TextSubscribe>
              </ContainerLogo>
                  
              <Gallery />
            </GalleryContent>

      </SectionAbout>

      <SectionForm>
        <Form />
          
        <DivRocketImage
          whileInView="visible"
          initial="initial"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 0 },
            visible: {
              opacity: 1,
              y: -100,
              transition: { duration: 1, delay: 1 },
            },
          }}>
            
          <RocketImage>
            <img src="/images/rocket.svg" alt="Rocket" />
          </RocketImage>
        </DivRocketImage>
        </SectionForm>

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
                <li><a href="/">Início</a></li>
                <li><a href="/">Sobre nós</a></li>
                <li><a href="/">Missões</a></li>
                <li><a href="/">Contato</a></li>
              </ul>
            </ContainerFooterMenu>
          </ContainerFooterBottom>  
        </SectionFooter>
    </>
  );
}

export default App;
