
import styles from './Home.module.scss'
import { Header } from '../components/header'
import { Welcome } from '../components/welcome'
import { Features } from '../components/features'
import { Contact } from '../components/contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <Welcome/>
      <Features/>
      <Contact/>
    </div>
  )
}
