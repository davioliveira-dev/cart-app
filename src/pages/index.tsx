import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Common/Header";
import { Container, Main } from "../components/Home";
import { Product } from "../components/Product";
import { loadProducts } from "../lib/loadProducts";
import { Product as ProductType } from "../types";

const Home: NextPage<Props> = ({ products }: Props) => {
  return (
    <>
      <Head>
        <title>Carrin feliz</title>
      </Head>
      <Container>
        <Header />
        <Main>
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Main>
      </Container>
    </>
  );
};

type Props = {
  products: ProductType[];
};

export const getStaticProps = async () => ({
  props: {
    products: await loadProducts(),
  },
});

export default Home;
