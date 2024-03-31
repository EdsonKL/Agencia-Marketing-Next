import styles from "./input.module.scss"

export const Input = ({ value, type, placeholder, pattern, onChange, name, id}) => {
    return(
        <input
            value={value}
            id={id}
            name={name}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            pattern={pattern}
            required
        />
    )
}