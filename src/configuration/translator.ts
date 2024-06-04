// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          "finally": "Finally, it's possible",
          "journey": "Your journey to Mars starts here",
          "list": "The first trip will be available starting on 03/12/2028. Sign up for our waiting list",
          "now": "Sign up now",
          "rockets": "Rockets with the highest technology and comfort",
          "successful": "Over 100 consecutive successful missions",
          "experience": "Unique and exclusive experience",
          "why" : "Why Mars?",
          "about-mars": "About the Red Planet",
          "mars" : "At an average distance of 140 million miles, Mars is one of the closest habitable neighbors to Earth. Mars is roughly half the distance from the Sun as Earth, so it still receives decent sunlight. It's a bit chilly, but we can warm it up. Its atmosphere is mostly composed of CO2 with some nitrogen and argon and a few other trace elements, which means we can grow plants on Mars just by compressing the atmosphere.",
          "gravity" : "The gravity on Mars is about 38% of that on Earth, so you would be able to lift heavy things and take long strides. Additionally, the day is remarkably close to that of Earth.",
          "humanity" : "The path to making humanity multiplanetary",
          "signup" : "Sign up",
          "home" : "Home",
          "about" : "About us",
          "missions" : "Missions",
          "contact" : "Contact",
          "form-secure" : "Secure your spot for the first trip",
          "form-fill" : "Fill out the fields below to join the waiting list",
          "form-name" : "Your name",
          "form-email" : "E-mail",
          "form-number" : "Phone number",
          "form-communications" : "I agree to receive communications",
          "form-spot" : "Secure my spot"
        }
      },
      pt: {
        translation: {
          "finally": "Finalmente é possivel",
          "journey": "Sua jornada para Marte começa aqui",
          "list" : "A primeira viagem estará disponível apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera",
          "now": "Inscreva-se agora",
          "rockets" : "Foguetes com a mais alta tecnologia e conforto",
          "successful": "Mais de 100 missões consecutivas com sucesso",
          "experience": "Experiência única e exlusiva",
          "why" : "Por que Marte",
          "about-mars": "Sobre o planeta vermelho",
          "mars" : "A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis mais próximos da Terra. Marte está mais ou menos metade da distância da Terra do Sol, então ainda tem luz solar descente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.",
          "gravity" : "A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da terra.",
          "humanity" : "O caminho para tornar a humanidade multiplanetária"  , 
          "signup" : "Inscreva-se",
          "home" : "Início",
          "about" : "Sobre nós",
          "missions" : "Missões",
          "contact" : "Contact",
          "form-secure" : "Garanta sua vaga para a primeira viagem",
          "form-fill" : "Preencha os campos abaixo para entrar na lista de espera.",
          "form-name" : "Seu nome",
          "form-email" : "E-mail",
          "form-number" : "Número de Telefone",
          "form-communications" : "Concordo em receber comunicações",
          "form-spot" : "Garantir minha vaga"
        }
      }
    },
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;