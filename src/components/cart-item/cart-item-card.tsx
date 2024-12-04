import { FC } from "react";
import { CartCardProps } from "./types";
import {
  Container,
  Image,
  Price,
  Quantity,
  RemoveButton,
  Title,
} from "./styles";
import { useCartContext } from "../../context/CartContext";

export const CartItemCard: FC<CartCardProps> = ({ product }) => {
  const { id, image, title, quantity, price } = product;

  const { removeItemFromCart } = useCartContext();

  const remove = () => {
    removeItemFromCart(id);
  };

  return (
    <Container>
      <Image src={image} height="280px" width="23%" />
      <Title>
        <span style={{ width: "70%" }}>{title}</span>
      </Title>
      <Quantity>{quantity}</Quantity>
      <Price>$ {price}</Price>
      <RemoveButton onClick={remove}>X</RemoveButton>
    </Container>
  );
};
