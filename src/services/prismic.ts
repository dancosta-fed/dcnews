import Prismic from '@prismicio/client'

export const getPrismicClient = () => {
  const prismic = new Prismic.Client(
    process.env.PRISMICS_ACCESS_TOKEN,
    {
      accessToken: process.env.PRISMICS_ACCESS_TOKEN
    }
  )

  return prismic
}