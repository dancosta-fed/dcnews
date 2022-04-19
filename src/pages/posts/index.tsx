import  Head  from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return(
    <>
      <Head>
        <title>Posts | dc.News</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postlist}>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Title for the post goes here</strong>
            <p>content of the post goes here. Short paragraph. full content won't display just yet.</p>
          </a>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Title for the post goes here</strong>
            <p>content of the post goes here. Short paragraph. full content won't display just yet.</p>
          </a>
          <a href="">
            <time>12 de março de 2022</time>
            <strong>Title for the post goes here</strong>
            <p>content of the post goes here. Short paragraph. full content won't display just yet.</p>
          </a>
        </div>
      </main>
    </>
  )
}