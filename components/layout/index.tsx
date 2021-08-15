import { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../header';
import Footer from '../Footer';
import styles from './layout.module.css';

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJs Basic | Home Page</title>
        <meta name="description" content="Warnasari"/>
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        {/* <div className={styles.content}>
        <h1 className={styles.content}>selamat datang</h1>
      </div> */}
        <Footer />
      </div>
    </>
  );
}
