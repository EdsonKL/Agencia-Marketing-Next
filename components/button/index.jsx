import styles from './button.module.scss'

export const Button = ({ title, kind }) => {

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
        <button className={`${styles.button} ${buttonKind()}`}>
            {title}
        </button>
    )
} 