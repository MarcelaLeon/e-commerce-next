import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import { TyC, TyCsAPIResponse } from "../types";
import styles from "../styles/TYC.module.css";
import Head from "next/head";
import { TEXTS_BY_LANGUAGE } from "../locale/constants";
import { Locale } from "./_app";
import { useRouter } from "next/router";

interface Props {
  data: TyCsAPIResponse
}


// Por ahora estamos utilizando data mockeada, pero
// debemos reemplazar esto por información proveniente de la
// API
/* export const data: TyCsAPIResponse = {
  version: "3 de julio, 2022",
  tycs: [
    {
      id: 1,
      title: "General",
      description: `Tienda Libre es una compañía que ofrece servicios vinculados principalmente al comercio electrónico. 
                    Los servicios están diseñados para formar un ecosistema que permita a las personas vender, 
                    comprar, pagar, enviar productos y realizar otras actividades comerciales con tecnología aplicada.`,
    },
  ],
}; */

//const TerminosYCondiciones: NextPage = ({data}:TyCsAPIResponse) => {
const TerminosYCondiciones = ({ data }: Props) => {

  /* const [version, setVersion] = useState('');
  const [tycs, setTycs] = useState([]);

  const getTycs = async () => {
    const response = await fetch('/api/tycs');
    const data = await response.json();
    setVersion(data.version)
    setTycs(data.tycs)
  }

  useEffect(() => {
    getTycs();
  }, []) */

  const locale = useRouter().locale as keyof typeof TEXTS_BY_LANGUAGE;

  if (!data) return null;

  const { version, tycs } = data;

  const renderTyc: (tyc: TyC) => JSX.Element = ({ id, description, title }) => (
    <div key={id}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  return (
    <div className={styles.tycContainer}>
      <Head>
        <title>Tienda Libre - Términos y Condiciones</title>
        <meta
          name="description"
          content="términos y condiciones de Tienda Libre"
        />
      </Head>

      <h2>{TEXTS_BY_LANGUAGE[locale].HEADER.TYCS}</h2>

      <p>Versión: {version}</p>
      {tycs.map(renderTyc)}
    </div>
  );
};

// Aquí debemos agregar el método para obtener la información
// de la API

/* export async function getStaticProps(context: any) {

  const lang = context.locale

  const response = await fetch(process.env.BASE_URL + 'api/tycs/' + lang);
  const data: TyCsAPIResponse = await response.json();

  return {
    props: {
      data
    }
  }
} */
export async function getServerSideProps(context: any) {

  const lang = context.locale

  const response = await fetch(process.env.BASE_URL + 'api/tycs/' + lang);
  const data: TyCsAPIResponse = await response.json();

  return {
    props: {
      data
    }
  }
}

export default TerminosYCondiciones;
