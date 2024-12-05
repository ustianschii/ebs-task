import { FC } from "react";
import { CartCardProps } from "./types";
import {
  IncDecButton,
  Container,
  Image,
  Price,
  Quantity,
  QuantityContainer,
  RemoveButton,
  Title,
  Info,
} from "./styles";
import { useCartContext } from "../../context/CartContext";

export const CartItemCard: FC<CartCardProps> = ({ product }) => {
  const { id, image, title, quantity, price } = product;

  const { removeItemFromCart, increment, decrement } = useCartContext();

  const remove = () => {
    removeItemFromCart(id);
  };

  return (
    <Container>
      <Image src={image} height="280px" width="23%" />

      <Info>
        <Title>
          <span style={{ width: "70%" }}>{title}</span>
        </Title>
        <QuantityContainer>
          <IncDecButton onClick={() => decrement(id)}>-</IncDecButton>
          <Quantity>{quantity}</Quantity>
          <IncDecButton onClick={() => increment(id)}>+</IncDecButton>
        </QuantityContainer>
        <Price>${(price * quantity).toFixed(2)}</Price>
      </Info>

      <RemoveButton onClick={remove}>Remove</RemoveButton>
    </Container>
  );
};
