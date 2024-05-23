import React from 'react'
import { Container, ContainerForm, ContainerInputCheckbox, IconForm, InputCheckbox, SubtitleForm, TextCheckbox, TitleForm} from './styles'
import { Button } from '../Button';
import { FormInput } from '../FormInput';

export function Form() {
  return (
    <Container
            whileInView="visible"
            initial="initial"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 1, delay: 1.5 },
              },
            }} >
              
            <IconForm />

            <TitleForm>
              Garanta sua vaga para a primeira viagem
            </TitleForm>

            <SubtitleForm>
              Preencha os campos abaixo para entrar na lista de espera.
            </SubtitleForm>

            <ContainerForm>
              <FormInput type="text" text='Seu nome' />
              <FormInput type="email" text='E-mail' />
              <FormInput type="number" text='Telefone' />
            </ContainerForm>
            
            <ContainerInputCheckbox>
              <InputCheckbox type="checkbox" />

              <TextCheckbox>Concordo em receber comunicações</TextCheckbox>
            </ContainerInputCheckbox>

            <Button title="Garantir minha vaga" fullwidth />

          </Container>
  )
}
