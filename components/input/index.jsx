import styles from "./input.module.scss"

export const Input = ({ value, type, placeholder, pattern, onChange, name, id}) => {
    return(
        <input
            autoComplete={type}
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