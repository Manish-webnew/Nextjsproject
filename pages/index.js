import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Day's</title>
        <meta name="description" content="Best Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HomePage
    </div>
  );
}
