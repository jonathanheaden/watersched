import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import clientPromise from '../lib/mongodb'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="grid">
          <a href="/history" className="card">
            <h3>Past Data &rarr;</h3>
            <p>historic weather data for ballarat from BOM</p>
          </a>
          <a href="/taps" className="card">
            <h3>Taps</h3>
            <p>Tap data</p>
          </a>
      </div>

      <section className={utilStyles.headingMd}>
        <p></p>
        
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}