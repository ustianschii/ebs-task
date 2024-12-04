import { CartItemCard } from "../../components/cart-item/cart-item-card";
import { Layout } from "../../components/layout/Layout";
import { useCartContext } from "../../context/CartContext";
import { CartHeader, Container, Wrapper, HeaderBlock } from "./styles";

const Cart = () => {
  const headerBlocks = [
    { name: "product", id: 1 },
    { name: "description", id: 2 },
    { name: "quantity", id: 3 },
    { name: "price", id: 4 },
    { name: "remove", id: 5 },
  ];

  const { cart, removeItemFromCart, clearCart } = useCartContext();

  return (
    <Layout>
      <Wrapper>
        <Container>
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
              <p>Empty cart</p>
            )}
          </div>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Cart;
