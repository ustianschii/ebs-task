import { removeItemFromCartFn } from "../context/CartContext";

describe("products context manipulations", () => {
  it("remove an item by id", () => {
    const mockCart = [
      {
        id: 1,
        image: "image1.png",
        name: "Item 1",
        quantity: 1,
        price: 10,
        title: "Title 1",
      },
      {
        id: 2,
        image: "image2.png",
        name: "Item 2",
        quantity: 1,
        price: 20,
        title: "Title 2",
      },
    ];
    const updatedMockCart = removeItemFromCartFn(mockCart, 1);
    expect(updatedMockCart).toEqual([
      {
        id: 2,
        image: "image2.png",
        name: "Item 2",
        quantity: 1,
        price: 20,
        title: "Title 2",
      },
    ]);
  });
});
