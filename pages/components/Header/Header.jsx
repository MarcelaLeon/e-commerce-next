import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { useRouter } from 'next/router'
import { localeNames, locales, TEXTS_BY_LANGUAGE } from "../../../locale/constants";


const Header = () => {

  const router = useRouter();
  const { locale } = router;

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

      {/* <div className={styles.navbar}>
        <Link href="./" locale={lang}>
          <p>{TEXTS_BY_LANGUAGE[lang].HEADER.PRODUCTS}</p>
        </Link>
        <Link href="./tycs" locale={lang}>
          <p>{TEXTS_BY_LANGUAGE[lang].HEADER.TYCS}</p>
        </Link>
      </div> */}

      <div className={styles.navbar}>
        <Link href="./" locale={locale}>
          <p>{TEXTS_BY_LANGUAGE[locale].HEADER.PRODUCTS}</p>
        </Link>
        <Link href="./tycs" locale={locale}>
          <p>{TEXTS_BY_LANGUAGE[locale].HEADER.TYCS}</p>
        </Link>
      </div>

      <select onChange={(e) => {
        //setLang(e.target.value)
        router.push('/', '/', { locale: e.target.value })
      }}>

        <option value={locales['ES_ES']}>{localeNames[locales['ES_ES']]}</option>
        <option value={locales['EN_US']}>{localeNames[locales['EN_US']]}</option>
        <option value={locales['PT_BR']}>{localeNames[locales['PT_BR']]}</option>

      </select>
    </header>)
};

export default Header;
