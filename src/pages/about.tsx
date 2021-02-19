import React from 'react'
import Head from 'next/head'
import Taurus from '../assets/taurus.svg'
import { Container } from '../styles/pages/Home'

const About: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Sobre</title>
      </Head>
     
        <h1 >
          Next.js!
        </h1>
        <p>O Site do Taurus</p>
    </Container>
  )
}

export default About
