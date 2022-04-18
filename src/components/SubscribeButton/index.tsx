import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({priceId}: SubscribeButtonProps) => {
  const {data: session} = useSession()

  async function subscribeButtonHandler() {
    if(!session){
      signIn('github')
      return
    } else {
      try{
        const response = await api.post('/subscribe')

        const { sessionId } = response.data

        const stripe = await getStripeJs()

        await stripe.redirectToCheckout({ sessionId })
      } catch(err){
        alert(`Ops: ${err.message}`)
      }
    }
  }
  return (
    <button
     type="button"
     className={styles.subscribeButton}
     onClick={subscribeButtonHandler}
    >
      Subscribe Now
    </button>
  )
}