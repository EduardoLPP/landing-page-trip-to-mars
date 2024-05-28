import { GlobalStyles } from './styles/globalstyles';
import { I18nextProvider } from 'react-i18next';
import { FirstSection } from './sections/First';
import { SecondSection } from './sections/Second';
import { ThirdSection } from './sections/Third';
import i18n from './configuration/translator';
import { FooterSection } from './sections/Footer';

function App() {

  return (
    <>
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />

        <FirstSection />

        <SecondSection /> 

        <ThirdSection />

        <FooterSection />

      </I18nextProvider>
    </>
  );
}

export default App;
