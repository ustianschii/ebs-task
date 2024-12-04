import { useState } from "react";

import { CartItemCard } from "../../components/cart-item/cart-item-card";
import { useCartContext } from "../../context/CartContext";
import { CartHeader, Container, HeaderBlock } from "./styles";
import { ClearCartModal } from "../../components/clear-cart-modal/clear-cart-modal";

const CartItemsGrid = () => {
  const { cart, clearCart } = useCartContext();
  const [showModal, setShowModal] = useState(false);

  const handleClearCart = () => {
    clearCart();
    setShowModal(false);
  };

  const headerBlocks = [
    { name: "product", id: 1 },
    { name: "description", id: 2 },
    { name: "quantity", id: 3 },
    { name: "price", id: 4 },
    { name: "remove", id: 5 },
  ];

  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "30px 0",
          fontSize: "20px",
        }}
      >
        <button onClick={() => setShowModal(true)}>Clear cart</button>
      </div>
      {showModal && (
        <ClearCartModal
          onConfirm={handleClearCart}
          onCancel={() => setShowModal(false)}
        />
      )}
      <CartHeader>
        {headerBlocks.map(({ name, id }) => (
          <HeaderBlock key={id}>{name}</HeaderBlock>
        ))}
      </CartHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {cart.length > 0 ? (
          <>
            {cart.map((product) => (
              <CartItemCard key={product.id} product={product} />
            ))}
          </>
        ) : (
          <div style={{ justifyItems: "center", fontSize: "25px" }}>
            <p>Empty cart</p>
            <button>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                Go to shoping!
              </a>
            </button>
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "30px 0",
          fontSize: "25px",
        }}
      >
        Total: $
        {cart
          .reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )
          .toFixed(2)}
      </div>
    </Container>
  );
};

export default CartItemsGrid;
