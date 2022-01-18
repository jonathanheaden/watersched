import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function History() {
  return (
    <Layout>
      <Head>
        <title>Recent Data</title>
      </Head>
      <h1>From the BOM</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}