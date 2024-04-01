"use client"
import { useState } from "react"
import axios from "axios"
import {useFormik} from "formik"
import * as Yup from "yup"

import styles from "./contact.module.scss"
import { Button } from '../button/index.jsx'
import { Input } from "../input/index.jsx"

export const Contact = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [sent, setSent] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            website: '',
            midia: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Campo Obrigatório"),
            email: Yup.string()
                    .email("E-mail Inválido")
                    .required("Campo Obrigatório"),
            phone: Yup.string()
                    .matches("", "Digite um telefone válido")
                    .required("Campo Obrigatório"),
            website: Yup.string()
                    .required("Campo Obrigatório"),
            midia: Yup.string()
                    .required("Campo Obrigatório")
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmit(values)
    })

    const handleSubmit = ({name, email, phone, website, midia}) => {
        // e.preventDefault()
        console.log("algo2")
        setIsLoading(true)
        setSent(false)
        axios.post("/api/sendEmail", {
            detailsBody: {
                name
            },
            messageBody: `
                Nome ${name}
                Email: ${email}
                Telefone: ${phone}
                Site: ${website}
                Midia: ${midia}
            `
        })
        .then(() => {
            formik.resetForm()
            setIsLoading(false)
            setSent(true)
        })
        .catch(() => console.log("ops"))
    }

    return (
        <div className={styles.container} id="contato">
            <div className={styles.texts} >
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e performance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={styles.form}>
                <h1>Fale com um especialista</h1>
                
                <form  id="formulario" onSubmit={formik.handleSubmit}>

                    <Input 
                        value={formik.values.name} 
                        id='name' 
                        name='name' 
                        type="text" 
                        placeholder='Nome completo'  
                        onChange={formik.handleChange} 
                        required
                    />
                    <Input 
                        value={formik.values.email} 
                        id='email' 
                        name='email' 
                        type="email" 
                        placeholder='E-mail Profissional'  
                        onChange={formik.handleChange} 
                        required
                    />
                    <Input
                        value={formik.values.phone}
                        id='phone' 
                        name='phone'
                        type="text" 
                        placeholder='Celular/Whatsapp'
                        pattern="^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$"
                        onChange={formik.handleChange}
                        required
                    />
                    <Input 
                        value={formik.values.website} 
                        id='website' 
                        name='website'
                        type="text" 
                        placeholder='Site' 
                        onChange={formik.handleChange} 
                        required
                    />
                    <select 
                        value={formik.values.midia} 
                        id='midia'  
                        name='midia' 
                        type="text" 
                        onChange={formik.handleChange} 
                        required
                    >
                        <option value="" disabled>Orçamento para mídia</option>
                        <option value="Instragram">Instragram</option>
                        <option value="Facebook">Facebook</option>
                    </select>

                    <Button sent={sent} loading={isLoading} title="Enviar" kind='full' type="submit"/>
                
                </form>

            </div>
                <div className={styles.footer}>
                    <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <span>Política de Privacidade</span>.</p>
                </div>
        </div>
    )
}