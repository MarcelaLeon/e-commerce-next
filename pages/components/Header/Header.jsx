import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { defaultLocale, localeNames, locales, TEXTS_BY_LANGUAGE } from "../../../locale/constants";

const Header = () => {

  const [lang, setLang] = useState(defaultLocale);

  return (
    <header className={styles.header}>
      <div>
        <figure>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>tienda</p>
          <p>libre</p>
        </div>
      </div>

      <div className={styles.navbar}>
        <Link href="./" locale={lang}>
          <p>{TEXTS_BY_LANGUAGE[lang].HEADER.PRODUCTS}</p>
        </Link>
        <Link href="./tycs" locale={lang}>
          <p>{TEXTS_BY_LANGUAGE[lang].HEADER.TYCS}</p>
        </Link>
      </div>

      <select onChange={(e) => {
        setLang(e.target.value)
      }}>

        <option value={locales['ES_ES']}>{localeNames[locales['ES_ES']]}</option>
        <option value={locales['EN_US']}>{localeNames[locales['EN_US']]}</option>
        <option value={locales['PT_BR']}>{localeNames[locales['PT_BR']]}</option>

      </select>
    </header>)
};

export default Header;
