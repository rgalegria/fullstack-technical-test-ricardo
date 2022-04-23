import Head from "next/head";
import algoliasearch from "algoliasearch/lite";
import { useState, useEffect } from "react";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";

// Components
import Content from "../components/Content/Content";

// Styles
import styles from "../styles/Home.module.css";

const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

export default function Home() {
    // Cart State
    const [cart, setCart] = useState({
        id: "",
        items: []
    });

    // Fetch Initial
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const cartData = await fetch("http://localhost:4000/cart", {
                    method: "POST"
                }).then((res) => res.json());
                setCart(cartData);
            } catch (err) {
                console.log("[Fetch Cart Error] =>", err);
            }
        };
        fetchCart();
    }, []);

    useEffect(() => {
        console.log("cart", cart);
    }, [cart, setCart]);

    const addItemtHandler = async (item) => {
        const hasItem = cart.items.find((element) => element.id === item.id);
        if (hasItem) return;

        try {
            const cartData = await fetch("http://localhost:4000/cart/" + cart.id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ items: [item] })
            });

            if (cartData.ok)
                setCart((prevCart) => ({
                    id: prevCart.id,
                    items: [...prevCart.items, item]
                }));
        } catch (err) {
            console.log("[Add Item Error] =>", err);
        }
    };

    const removeItemHandler = async (item) => {
        if (cart.items.length === 0) return;

        const hasItem = cart.items.find((element) => element.id === item.id);
        if (!hasItem) return;

        try {
            const updatedCart = await fetch("http://localhost:4000/cart/" + cart.id, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ items: [item] })
            }).then((res) => res.json());
            setCart(updatedCart);
        } catch (err) {
            console.log("[Remove Item Error] =>", err);
        }
    };

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
                    <article>
                        <Content data={{ cart, addItemtHandler, removeItemHandler }} />
                    </article>
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
