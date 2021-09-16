import type {NextPage} from 'next'
import Head from 'next/head'

const title = "Does tzatziki have dairy?"
const description = "Yes"
const imageUrl ='https://doestzatzikihavedairy.com/tzatziki.png'

const Home: NextPage = () => {
  return (
    <div>

      <Head>
        <title>{title}</title>
        <meta name="description" content={description || ""}/>

        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description || ""}/>
        <meta property="og:type" content="article"/>

        <meta name="twitter:card" content={"summary"}/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={description}/>

        <meta
          property="og:image:width"
          content={"800"}
        />
        <meta
          property="og:image:height"
          content={"800"}
        />

        <meta property="og:image" content={imageUrl}/>
        <meta name="twitter:image" content={imageUrl}/>
      </Head>

      <main>
        <h1>
          Yes
        </h1>
      </main>
    </div>
  )
}

export default Home
