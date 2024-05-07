import { GlobalStyles } from './styles/globalstyles';
import { Container, Header, Logo, HeaderMain, FirstTitle, Subtitle, SecondTitle, AstronautIllustration, IconsContainer} from './styles/styles';
import { Button } from './components/Button';
import { Icon } from './components/Icon';

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Container>
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
    </>
  );
}

export default App;
