import { useEffect, useState } from "react";

import { Layout } from "../../components/layout/Layout";
import ProductCard from "../../components/product-card/product-card";
import { Product } from "../../components/product-card/types";
import { Wrapper, Container } from "./styles";
import SortButtons from "../../components/sort-buttons/sort-buttons";

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<
    "asc" | "desc" | "category" | "none"
  >("none");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [...new Set(products.map((product) => product.category))];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setFilteredProducts(data);
      });
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
    <Layout>
      <Wrapper>
        <Container>
          <SortButtons
            setSortOrder={setSortOrder}
            categories={categories}
            setSelectedCategory={setSelectedCategory}
          />

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
      </Wrapper>
    </Layout>
  );
};

export default Home;
