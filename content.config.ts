import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    usecase: defineCollection({
      type: 'data',
      source: 'usecase/**.json',
      schema: z.object({
        slug: z.string(),
        logo: z.string(),
        title: z.string(),
        excerpt: z.string(),
        date: z.string(),
        challenge: z.string(),
        blockquote: z.string(),
        solution: z.array(z.string()),
        results: z.array(z.string()),
        conclusion: z.string()
      })
    })
  }
})
