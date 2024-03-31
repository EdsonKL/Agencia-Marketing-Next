import styles from "./input.module.scss"

export const Input = ({type, placeholder, pattern, onChange}) => {
    return(
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            pattern={pattern}
            required
        />
    )
}