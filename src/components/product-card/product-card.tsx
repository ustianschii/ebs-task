import { FC, useState } from "react";
import {
  Container,
  Image,
  Title,
  Price,
  Description,
  Category,
  Rating,
  CartButton,
} from "./styles";

import { ProductCardProps } from "./types";

const cutDescription = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const ProductCard: FC<ProductCardProps> = ({ products }) => {
  const [inCart, setInCart] = useState(false);

  const toggleCart = () => {
    setInCart((prev) => !prev);
  };

  return (
    <>
      {products.map((product) => {
        const { id, title, price, description, category, image, rating } =
          product;

        return (
          <Container key={id}>
            <div>
              <Image src={image} alt={title} />
              <div
                style={{
                  minHeight: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Title>{title}</Title>
                <Price>${price}</Price>
              </div>
              <Description>{cutDescription(description, 150)}</Description>
            </div>
            <div>
              <Category>Category: {category}</Category>
              <Rating>
                Rating: {rating.rate} ({rating.count} reviews)
              </Rating>
            </div>
            <div>
              <CartButton inCart={inCart} onClick={toggleCart}>
                {inCart ? "Remove from Cart" : "Add to Cart"}
              </CartButton>
            </div>
          </Container>
        );
      })}
    </>
  );
};

export default ProductCard;
