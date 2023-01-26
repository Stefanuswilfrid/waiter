import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Metatags from "../components/Metatags";
import Index from "../components/Index";


export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Metatags />

      <Index/>

      

     
    </div>
  );
}
