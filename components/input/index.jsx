import styles from "./input.module.scss"

export const Input = ({type, placeholder, pattern}) => {
    return(
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            pattern={pattern}
            required
        />
    )
}