import { FC } from "react";
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

import { Product, ProductCardProps } from "./types";
import { useCartContext } from "../../context/CartContext";

const cutDescription = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const ProductCard: FC<ProductCardProps> = ({ products }) => {
  const { cart, addItemToCart, removeItemFromCart } = useCartContext();

  const isInCart = (productId: number) =>
    cart.some((item) => item.id === productId);

  const addToCart = (product: Product) => {
    if (!isInCart(product.id)) {
      addItemToCart({
        id: product.id,
        image: product.image,
        name: product.title,
        price: product.price,
        title: product.title,
        quantity: 1,
      });
    }
  };

  const removeFromCart = (productId: number) => {
    removeItemFromCart(productId);
  };

  return (
    <>
      {products.map((product) => {
        const { id, title, price, description, category, image, rating } =
          product;

        const inCart = isInCart(id);

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
              <div>
                {!inCart ? (
                  <CartButton incart={false} onClick={() => addToCart(product)}>
                    Add to cart
                  </CartButton>
                ) : (
                  <CartButton
                    incart={true}
                    onClick={() => removeFromCart(id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Remove from cart
                  </CartButton>
                )}
              </div>
            </div>
          </Container>
        );
      })}
    </>
  );
};

export default ProductCard;
