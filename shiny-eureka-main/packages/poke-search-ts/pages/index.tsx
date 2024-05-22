import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {PokeSearch} from "../components/PokeSearch";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to PokéSearch</h1>
      </main>

      <PokeSearch />

      <footer className={styles.footer}>
        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/pokeapi.png"
              alt="PokéApi Logo"
              width={105}
              height={42}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;