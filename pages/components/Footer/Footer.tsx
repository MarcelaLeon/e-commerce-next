import styles from "../../../styles/Home.module.css";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Powered by</span>
            <span className={styles.logo}>
                <Image
                    src="/dh.png"
                    alt="Digital House Logo"
                    width={30}
                    height={30}
                />
            </span>
        </footer>
    )
}