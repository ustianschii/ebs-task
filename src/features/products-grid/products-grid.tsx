import { FC, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card";
import { Container, Spinner, LoadingContainer } from "./styles";
import { Product } from "../../components/product-card/types";
import SortButtons from "../../components/sort-buttons/sort-buttons";

const ProductsGrid: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOrder, setSortOrder] = useState<
    "asc" | "desc" | "category" | "none"
  >("none");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const categories = [...new Set(products.map((product) => product.category))];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setFetchError(null);

        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Failed to fetch products. Please try again.");
        }

        const data: Product[] = await res.json();
        setTimeout(() => {
          setProducts(data);
          setFilteredProducts(data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        setFetchError((error as Error).message);
      } finally {
        setLoading(false);
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

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (fetchError) {
    return (
      <LoadingContainer>
        <p role="alert">{fetchError}</p>
      </LoadingContainer>
    );
  }

  return (
    <>
      <SortButtons
        setSortOrder={setSortOrder}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <Container>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} products={[product]} />
        ))}
      </Container>
    </>
  );
};

export default ProductsGrid;
