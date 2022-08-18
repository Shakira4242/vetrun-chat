import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import ChatwootWidget from './chat'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChatwootWidget/>

        <h1 className={styles.title}>
          Thanks for coming in.
        </h1>

        <p className={styles.description}>
          Click on the bottom right tab to start your appointment with our cloud receptionists
        </p>

      </main>

      <footer className={styles.footer}>
        Made with ❤️ by {'Vetrun'}
      </footer>
    </div>
  )
}
