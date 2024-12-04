import { FC, useEffect, useState } from "react";

import ProductCard from "../../components/product-card/product-card";
import { Container } from "./styles";
import { Product } from "../../components/product-card/types";
import SortButtons from "../../components/sort-buttons/sort-buttons";

const ProductsGrid: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<
    "asc" | "desc" | "category" | "none"
  >("none");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [...new Set(products.map((product) => product.category))];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("failed to fetch");
        }

        const data: Product[] = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    switch (sortOrder) {
      case "asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [sortOrder, products, selectedCategory]);

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <SortButtons
          setSortOrder={setSortOrder}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <Container>
        {filteredProducts.length > 0 ? (
          <>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} products={[product]} />
            ))}
          </>
        ) : (
          <p>Empty stock</p>
        )}
      </Container>
    </>
  );
};

export default ProductsGrid;
