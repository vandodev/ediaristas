import Head from 'next/head';
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
       title={'Conheça os profissionais'}
       subtitle={'Preencha seu email e veja todas as novidades dos profissionais da sua área'}
       />

       <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
       />
      
      <UserInformation
        name={'Evandro Oliveira'}
        picture={'https://github.com/vandodev.png'}
        rating={4}
        description={'Morro Agudo'}
      />

    </div>
  )
}
