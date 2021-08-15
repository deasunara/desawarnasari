import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Head>
        <title> nextJs Basic | Home page</title>
        <meta name="description" content="Website NextJs Basic" />
      </Head>
      <Layout>
        <h1 className={styles['title-homepage']}> Selamat datang dea sunara</h1>
      </Layout>
    </>
  );
}
