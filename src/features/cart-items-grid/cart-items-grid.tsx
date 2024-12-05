import { useState } from "react";

import { CartItemCard } from "../../components/cart-item/cart-item-card";
import { useCartContext } from "../../context/CartContext";
import {
  CartHeader,
  Container,
  HeaderBlock,
  ClearButtonContainer,
  StyledButton,
  SumContainer,
} from "./styles";
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
      <ClearButtonContainer>
        <StyledButton onClick={() => setShowModal(true)}>
          Clear cart
        </StyledButton>
      </ClearButtonContainer>
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
            <p>Empty cart...</p>
            <StyledButton>
              <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
                Go to shoping!
              </a>
            </StyledButton>
          </div>
        )}
      </div>
      <SumContainer>
        Total: $
        {cart
          .reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )
          .toFixed(2)}
      </SumContainer>
    </Container>
  );
};

export default CartItemsGrid;
