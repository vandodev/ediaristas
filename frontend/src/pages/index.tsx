import Head from 'next/head';
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
       title={'Conheça os profissionais'}
       subtitle={'Preencha seu email e veja todas as novidades dos profissionais da sua área'}
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
