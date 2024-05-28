import React from 'react'
import { Container, ContainerForm, ContainerInputCheckbox, IconForm, InputCheckbox, SubtitleForm, TextCheckbox, TitleForm} from './styles'
import { Button } from '../Button';
import { FormInput } from '../FormInput';
import { useTranslation } from 'react-i18next';

export function Form() {
  const { t, i18n } = useTranslation();
  
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

            <TitleForm>{t('form-secure')} </TitleForm>

            <SubtitleForm>{t('form-fill')}</SubtitleForm>

            <ContainerForm>
              <FormInput type="text" text={t('form-name')} />
              <FormInput type="email" text={t('form-email')} />
              <FormInput type="number" text={t('form-number')} />
            </ContainerForm>
            
            <ContainerInputCheckbox>
              <InputCheckbox type="checkbox" />

              <TextCheckbox>{t('form-communications')}</TextCheckbox>
            </ContainerInputCheckbox>

            <Button title={t('form-spot')}fullwidth />

          </Container>
  )
}
