"use client"
import styles from './button.module.scss'

export const Button = ({ onClick ,sent, loading,  title, kind, type }) => {

    const buttonKind = () => {
        if (kind === "secondary"){
            return styles.secondary   
        }
        if (kind === "full"){
            return styles.full   
        }
        else{
            return styles.primary
        }
    }
    return(
        <button onClick={onClick} type={type} className={`${styles.button} ${buttonKind()}`}>
            
            {loading == false && sent == false? title : loading == true && sent == false ? "Enviando..." : "Enviado com Sucesso"}
        </button>
    )
} 