import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/desa"><a>desa</a></Link></li>
          <li><Link href="/users"><a>users</a></Link></li>
        </ul>
      </header>
      <h1 className={styles['title-homepage']}> Selamat datang dea sunara</h1>
    </>
  );
}
