// import { render, screen, fireEvent } from "@testing-library/react";
// import { CartContext, useCartContext } from "../context/CartContext";
// import React, { useContext } from "react";
// import { CartItemCard } from "../components/cart-item/cart-item-card";

// const context = {
//   cart: [
//     {
//       id: 1,
//       image: "",
//       name: "Jacket",
//       quantity: 2,
//       price: 300,
//       title: "Jacket",
//     },
//     {
//       id: 2,
//       image: "",
//       name: "Boots",
//       quantity: 3,
//       price: 400,
//       title: "Boots",
//     },
//   ],
//   addItemToCart: vi.fn(),
//   removeItemFromCart: vi.fn(),
//   increment: vi.fn(),
//   decrement: vi.fn(),
//   clearCart: vi.fn(),
// };

// describe("cart item card", () => {
//   it("incerement/decrement quantity", () => {
//     //const cartContext = useCartContext();

//     const { container } = render(
//       <CartContext.Provider value={context}>
//         <CartItemCard product={context.cart[0]} />
//       </CartContext.Provider>
//     );

//     const cart = screen.getByText("Jacket");

//     expect(cart).toBeInTheDocument();
//   });
// });

//to do
