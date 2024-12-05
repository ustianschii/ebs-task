import React from "react";
import { Layout } from "../../components/layout/Layout";
import { Wrapper } from "./styles";
import ProductsGrid from "../../features/products-grid/products-grid";

const Home: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <ProductsGrid />
      </Wrapper>
    </Layout>
  );
};

export default Home;
