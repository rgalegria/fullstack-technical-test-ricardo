import Head from "next/head";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";

// Styles
import styles from "../styles/Home.module.css";

const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>La Fourche</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to La Fourche Frontend Technical Test v2 !</h1>
                <InstantSearch indexName="bestbuy" searchClient={searchClient}>
                    <header>
                        <SearchBox translations={{ placeholder: "Barre de recherche" }} />
                    </header>
                </InstantSearch>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    );
}
