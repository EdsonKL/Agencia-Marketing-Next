import styles from "./contact.module.scss"
import { Button } from '../button/index.jsx'
import { Input } from "../input/index.jsx"

export const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={styles.form}>
                <h1>Fale com um especialista</h1>
                
                <form>

                    <Input type="text" placeholder='Nome completo' required/>
                    <Input type="email" placeholder='E-mail Profissional' required/>
                    <Input 
                        type="text" 
                        placeholder='Celular/Whatsapp'
                        pattern="^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$"
                        required
                    />
                    <Input type="text" placeholder='Site' required/>
                    <select type="text" required>
                        <option value="" selected disabled>Orçamento para mídia</option>
                        <option value="Instragram">Instragram</option>
                        <option value="Facebook">Facebook</option>
                    </select>

                    <Button title='Enviar' kind='full'/>
                
                </form>
            </div>
        </div>
    )
}