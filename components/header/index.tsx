import Link from 'next/link';
import styles from './header.module.css';

export default function Home() {
    return (
     <>
     <header className={styles.container}>
       <ul className={styles.list}>
         <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
         <li className={styles.item}><Link href="/desa"><a>desa</a></Link></li>
         <li className={styles.item}><Link href="/users"><a>users</a></Link></li>
       </ul>
     </header>
     <h1> Selamat datang dea sunara</h1>
     </>
    )
  }
  