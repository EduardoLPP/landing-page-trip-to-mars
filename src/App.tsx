import { GlobalStyles } from './styles/globalstyles';
import { Container, Header, Logo, HeaderMain, FirstTitle, Subtitle, SecondTitle, AstronautIllustration } from './styles/styles';
import { Button } from './components/Button';

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

          <Subtitle>A primeira viagem estará disponível apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera</Subtitle>
        </HeaderMain>
        
        <AstronautIllustration />

        <Button title='Inscreva-se agora' />

      </Container>
    </>
  );
}

export default App;
