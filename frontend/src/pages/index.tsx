import Head from 'next/head';
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';

export default function Home() {
  return (
    <div>
      <SafeEnviroment />
      <PageTitle
       title={'Conheça os profissionais'}
       subtitle={'Preencha seu email e veja todas as novidades dos profissionais da sua área'}
       />
      
    </div>
  )
}
