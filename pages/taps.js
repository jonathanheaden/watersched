import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Taps() {
  return (
    <Layout>
      <Head>
        <title>Tap Data</title>
      </Head>
      <h1>From the DB</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}