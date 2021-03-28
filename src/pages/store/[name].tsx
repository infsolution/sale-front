import React from 'react'
import Head from 'next/head'
import Taurus from '../assets/taurus.svg'
import { Container } from '../../styles/pages/Home'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

const Store: React.FC = () => {
    const router = useRouter()
    const { name } = router.query
  return (
    <Container >
      <Head>
        <title>{name}</title>
      </Head>

        <h1 >
          Well come to {name}!
        </h1>
        <p>O Site do Taurus</p>
    </Container>
  )
}

export default Store
