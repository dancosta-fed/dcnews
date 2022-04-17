import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
          <title>Home | dc.News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏾  Hey, welcome</span>
          <h1>A journey with <span>React</span> learning</h1>
          <p>
            Get access to all my publications <br />
            for <span>{product.amount}</span> month.
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img 
          className="boy-coding" 
          src="/images/avatar.svg" 
          alt="boy coding" 
         />
         
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KpFb5IegnlGE76yNSor5dKV', {
    expand: ['product'] // to show name and info of the product 
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100), // receiving the price in cents
  }
  return {
    props:{
      product
    },
    revalidate: 60 * 60 * 24, // It revalidates every 24 HOURS
  }
}