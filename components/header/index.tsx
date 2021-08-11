import Link from 'next/link';
import styles from './header.module.css';

export default function header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}><Link href="/"><a>home</a></Link></li>
        <li className={styles.item}><Link href="/desa"><a>desa</a></Link></li>
        <li className={styles.item}><Link href="/user"><a>user</a></Link></li>
      </ul>
    </header>
  );
}
