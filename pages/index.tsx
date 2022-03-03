import type { NextPage } from 'next'
import Head from 'next/head'
import { Login } from '../components/Login'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Metaverse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  )
}

export default Home
