import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { TEXTS_BY_LANGUAGE } from "../locale/constants";
import styles from "../styles/Home.module.css";
import { Product, ProductsAPIResponse } from "../types";

// Por ahora estamos utilizando data mockeada, pero
// debemos reemplazar esto por información proveniente de la
// API
/* export const data: ProductsAPIResponse = [
  {
    id: 1,
    title: "Mochila con correas",
    price: 7500,
    description:
      "Tu mochila perfecta para el dìa a dìa y salidas de fin de semana. Guarda tu notebook (hasta 15 pulgadas) en la funda acolchada, y protégela de los rayones y golpes",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: 4,
  },
]; */


export interface Props {
  data: ProductsAPIResponse
}

//const Home: NextPage = () => {
const Home = ({ data }: Props) => {

  const locale = useRouter().locale as keyof typeof TEXTS_BY_LANGUAGE;

  if (!data) return null;

  const formatPrice: (price: number) => string = (price) =>
    price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const renderRatingStars: (
    rating: number,
    maxStars?: number
  ) => JSX.Element[] = (rating, maxStars = 5) =>
      Array.from({ length: maxStars }).map((_, index) => (
        <Image
          key={index}
          alt={index <= rating ? "yellow star" : "empty star"}
          src={index <= rating ? "/yellowStar.png" : "/emptyStar.png"}
          layout="fixed"
          width={20}
          height={20}
        />
      ));

  const renderProductCard: (product: Product) => JSX.Element = ({
    id,
    title,
    description,
    rating,
    image,
    price,
  }) => (
    <div className={styles.card} key={id}>
      <h2>{title}</h2>
      <p>
        {renderRatingStars(rating)}
        <b className={styles.price}>${formatPrice(price)}</b>
      </p>
      <div className={styles.imageDescription}>
        <Image
          src={image}
          layout="fixed"
          width={100}
          height={130}
          alt={title}
        />
        <p>{description}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Tienda Libre - Productos Destacados</title>
        <meta
          name="description"
          content="listado de productos destacados de Tienda Libre"
        />
      </Head>
      <main className={styles.main}>

        <h1>{TEXTS_BY_LANGUAGE[locale].HEADER.PRODUCTS}</h1>

        <div className={styles.grid}>{data.map(renderProductCard)}</div>
      </main>

    </div>
  );
};

// Aquí debemos agregar el método para obtener la información
// de la API

//Como estos datos cambia mucho "segun el ejercicio" se recomienda ServerSide

export async function getServerSideProps(context: any) {

  const lang = context.locale

  const response = await fetch(process.env.BASE_URL + 'api/products/' + lang);
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}

export default Home;
