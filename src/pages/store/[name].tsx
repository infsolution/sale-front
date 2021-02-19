import React from 'react'
import Head from 'next/head'
import Taurus from '../assets/taurus.svg'
import { Container } from '../../styles/pages/Home'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

const Store: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Nome da Loja</title>
      </Head>
     
        <h1 >
          Next.js!
        </h1>
        <p>O Site do Taurus</p>
    </Container>
  )
}

export default Store