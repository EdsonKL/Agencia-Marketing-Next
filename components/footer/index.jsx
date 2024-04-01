import Link from "next/link"
import styles from "./footer.module.scss"
import Image from "next/image"

import IconInstagram from '../../public/images/icon-instagram.png'
import IconFacebook from '../../public/images/icon-facebook.png'
import IconLinkedin from '../../public/images/icon-linkedin.png'
import IconYoutube from '../../public/images/icon-youtube.png'

export const Footer = () => {
    return (
        <div className={styles.container}>

            <div className={styles.column}>
                <h1 className={styles.title}>Agência</h1>
                <h3>0800 800 800</h3>
                <p>comercial@agencia.com.br</p>
            </div>
            <div className={`${styles.column} ${styles.midFooter}`}>
                <h1>Menu</h1>
                <p>Quem somos</p>
                <p>Cases</p>
            </div>
            <div className={`${styles.column} ${styles.midFooter}`}>
                <h1>Conteúdo</h1>
                <p>E-books</p>
                <p>Fórmulas prontas</p>
            </div>
            <div className={`${styles.column} ${styles.alignRight}`}>
                <h1>Social</h1>
                <div className={styles.containerIcons}>
                    <Link href='/'><Image src={IconInstagram} alt="instagram"/></Link>
                    <Link href='/'><Image src={IconFacebook} alt="facebook"/></Link>
                    <Link href='/'><Image src={IconLinkedin} alt="linkedin"/></Link>
                    <Link href='/'><Image src={IconYoutube} alt="youtube"/></Link>
                </div>
            </div>
            <div className={styles.allRightReserved}>
                ©2022 AGENCIA - Todos os direitos reservados.
            </div>
        </div>
    )
}