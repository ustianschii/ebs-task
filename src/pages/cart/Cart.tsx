import { Layout } from "../../components/layout/Layout";
import CartItemsGrid from "../../features/cart-items-grid/cart-items-grid";
import { Wrapper } from "./styles";

const Cart = () => {
  return (
    <Layout>
      <Wrapper>
        <CartItemsGrid />
      </Wrapper>
    </Layout>
  );
};

export default Cart;
