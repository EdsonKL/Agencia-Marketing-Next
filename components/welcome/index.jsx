import { Button } from '../button'
import Image from 'next/image'
import leads from '../../public/images/leads.svg'
import styles from './welcome.module.scss'

export const Welcome = () => {
    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Melhor agência de marketing do bairro</h1>
                <p>Somos uma agência de performance digital, aceleramos vendas e aquisição de leads para grandes marcas.</p>
                <Button title="Aumentar Vendas" kind="secondary"/>
            </div>

            <div className={styles.DivImage}>
                <Image className={styles.image} src={leads} alt='Banner Leads'/>
            </div>
        </div>
    )
}