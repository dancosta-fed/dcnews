import {  GetStaticProps } from "next"
import { getSession } from "next-auth/react"
import { RichText } from "prismic-dom"
import { getPrismicClient } from "../../../services/prismic"
import Head  from 'next/head'
import styles from "../post.module.scss"
import Link from "next/link"

interface PostPreviewProps {
  post:{
    slug: string,
    title: string,
    content: string,
    updatedAt: string,
  }
}

export default function PostPreview({ post }: PostPreviewProps ) {
  return (
    <>
      <Head>
        <title>{post.title} | dc.News</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div 
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{__html: post.content}} 
          />

          <div className={styles.keepReading}>
            Wanna keep reading?
            <Link href="/">
              <a>Subscribe Now 🤗 </a>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params





  const prismic = getPrismicClient()
  
  const response = await prismic.getByUID<any>('post', String(slug), {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post,
    }
  }
}