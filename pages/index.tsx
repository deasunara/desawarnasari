import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout PageTitle="Home Page">
      <Image src="/A4.png" width={200} height={200} />
      <h1 className={styles['title-homepage']}> Selamat datang dea sunara</h1>
    </Layout>
  );
}
