import axios from "axios"
import styles from "./contact.module.scss"
import { Button } from '../button/index.jsx'
import { Input } from "../input/index.jsx"
import { useState } from "react"

export const Contact = () => {
    const [nome, setNome] = useState(null)
    const [telefone, setTelefone] = useState(null)
    const [email, setEmail] = useState(null)
    const [site, setSite] = useState(null)
    const [midia, setMidia] = useState(null)

    const sendEmail = (ev) => {
        ev.preventDefault()
        axios.post("/api/sendEmail", {
            messageBody: `
                Nome ${nome}
                Email: ${email}
                Telefone: ${telefone}
                Site: ${site}
                Midia: ${midia}
            `
        })
        .then(() => console.log("uhhu"))
        .catch(() => console.log("ops"))
    }

    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={styles.form}>
                <h1>Fale com um especialista</h1>
                
                <form onSubmit={sendEmail}>

                    <Input type="text" placeholder='Nome completo' onChange={(e) => setNome(e.target.value)} required/>
                    <Input type="email" placeholder='E-mail Profissional' onChange={(e) => setEmail(e.target.value)} required/>
                    <Input 
                        type="text" 
                        placeholder='Celular/Whatsapp'
                        pattern="^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$"
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                    <Input type="text" placeholder='Site' onChange={(e) => setSite(e.target.value)} required/>
                    <select type="text" onChange={(e) => setMidia(e.target.value)} required>
                        <option value="" selected disabled>Orçamento para mídia</option>
                        <option value="Instragram">Instragram</option>
                        <option value="Facebook">Facebook</option>
                    </select>

                    <Button title='Enviar' kind='full'/>
                
                </form>

            </div>
                <div className={styles.footer}>
                    <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <span>Política de Privacidade</span>.</p>
                </div>
        </div>
    )
}