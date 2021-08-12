import { ReactNode } from 'react';
import Header from "../header";
import Footer from "../Footer";
import styles from "./layout.module.css"

interface LayoutProps {
    Children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { Children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{Children}</div>
      <Footer />
    </div>
  );
}
