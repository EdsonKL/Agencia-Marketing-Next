import Link from 'next/link'
import styles from './header.module.scss'

export const Header = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logotipo}><h1>Agência</h1></div>
            <div className={styles.menu}>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/'>O que fazemos</Link></li>
                    <li><Link href='/'>Cases</Link></li>
                </ul>
            </div>
            <div className={styles.action}>
                <button className={styles.button}>
                    Fale Conosco
                </button>
            </div>
        </div>
    )
}