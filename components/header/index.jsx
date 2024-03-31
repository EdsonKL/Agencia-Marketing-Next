"use client"

import Link from 'next/link'
import styles from './header.module.scss'
import { Button } from '../button'
import { ScrollTo } from '../../utils/scrollTo'

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
                <Button onClick={() => ScrollTo("contato")} sent ={false} loading={false} title="Fale Conosco" kind="primary"/>
            </div>
        </div>
    )
}