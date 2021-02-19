import React from 'react'
import Head from 'next/head'
import Taurus from '../assets/taurus.svg'
import { Container } from '../styles/pages/Home'
const Home: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Create Next App</title>
      </Head>
      <Taurus/>
        <h1 >
          Next.js!
        </h1>
        <p>O Site do Taurus</p>
    </Container>
  )
}

export default Home
