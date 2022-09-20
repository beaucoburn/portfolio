import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/images/profile.jpg"
          height={288}
          width={220}
          className="image"
          alt="Thanks for coming to visit"
        />

        <div className="grid">

          <div className='card'>
            <Link href="/portfolio/PortfolioMain">
              <h3>Come see my Portfolio!! &rarr;</h3>
            </Link>
            <p>A collection of my latest work.</p>
          </div>

          <div className='card'>
             <Link href="/posts/first-post">
               <h3>The Blog &rarr;</h3>
             </Link>
             <p>Come follow along on my journey as a developer!</p>
          </div>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>
    </div>
  )
}
