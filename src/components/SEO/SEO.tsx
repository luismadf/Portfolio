import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description?: string
  name?: string
  type?: string
  image?: string
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Luis de Freites",
  "url": "https://luisma.dev",
  "jobTitle": "Frontend Developer",
  "sameAs": [
    "https://github.com/luismadf",
    "https://www.linkedin.com/in/luis-de-freites-6a5888181/",
  ],
  "knowsAbout": ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "luisma.dev",
  "url": "https://luisma.dev",
  "author": {
    "@type": "Person",
    "name": "Luis de Freites",
  },
}

export const SEO = ({
  title,
  description = 'Portfolio of Luis de Freites. Frontend Developer specializing in React, Next.js, and TypeScript.',
  name = 'Luis de Freites',
  type = 'website',
  image = '/images/og-image.svg'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(personJsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>
    </Helmet>
  )
}
