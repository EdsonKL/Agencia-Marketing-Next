import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.scss'
import { Header } from '../components/header'
import { Welcome } from '../components/welcome'
import { Features } from '../components/features'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Welcome/>
      <Features/>
    </div>
  )
}
