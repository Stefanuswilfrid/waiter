import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Title from '../components/Title';
import Metatags from '../components/Metatags';


export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Metatags/>

      <main className={styles.main}>
      <Title text="Get Instant Assistance to Help You Navigate Any Challenge, Any Time."/>

        <button onClick={()=>{router.push("/signin")}} className={styles.button}>Start Now</button>

       
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
