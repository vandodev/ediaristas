import Head from 'next/head';
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'

import {Button, Typography} from "@material-ui/core";
import {FormElementsContainer} from "ui/styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
       title={'Conheça os profissionais'}
       subtitle={'Preencha seu email e veja todas as novidades dos profissionais da sua área'}
       />

       <FormElementsContainer>

        <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
        />

        <Typography color="error">CEP inválido</Typography>

        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "220px" }}
        >Buscar</Button>

       </FormElementsContainer>

      
      <UserInformation
        name={'Evandro Oliveira'}
        picture={'https://github.com/vandodev.png'}
        rating={4}
        description={'Morro Agudo'}
      />

    </div>
  )
}
