import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
          <title>Home | dc.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏾  Hey, welcome to</span>
          <h1>My journey with <span>React</span> learning</h1>
          <p>
            Get access to all my publications <br />
            <span>for $5.99</span>
          </p>
        </section>

        <img src="/images/avatar.svg" alt="boy coding" width="350" />
      </main>
    </>
  )
}
