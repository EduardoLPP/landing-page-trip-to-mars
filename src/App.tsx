import { GlobalStyles } from './styles/globalstyles';
import { Header, Logo, HeaderMain, Title, Subtitle } from './styles/styles';
import { Button } from './components/Button';

function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header>
        <Logo>
          <img src="/public/images/logo-space-y.svg" alt="SPACE-Y"/>
        </Logo>  
      </Header>

      <HeaderMain>
        <p>Finalmente é possível</p>

        <Title>Sua jornada para Marte começa aqui<span>.</span></Title>

        <Subtitle>A primeira viagem estará disponível apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera</Subtitle>
      </HeaderMain>

      <Button title='Inscreva-se agora' />
    </>
  );
}

export default App;
