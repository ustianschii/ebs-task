export type Product = {
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: number;
};

export type CartCardProps = {
  product: Product;
};
