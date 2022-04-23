import { useState, useEffect } from "react";

const Cart = () => {
    // Cart State
    const [cart, setCart] = useState({
        id: "",
        items: []
    });

    // Loading State
    const [isLoading, setIsLoading] = useState(false);

    // Fetch Initial
    useEffect(() => {
        const fetchCart = async () => {
            setIsLoading(true);
            try {
                const cartData = await fetch("http://localhost:4000/cart", {
                    method: "POST"
                }).then((res) => res.json());
                setCart(cartData);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
                console.log(err);
            }
        };
        fetchCart();
    }, []);

    let cartVew;

    if (cart.items.length === 0) {
        cartVew = <h3>Panier vide</h3>;
    } else {
        cartVew = (
            <div>
                {cart.items.map((item) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <h1>Votre Panier</h1>
            {!isLoading && cart && cartVew}
        </div>
    );
};

export default Cart;
