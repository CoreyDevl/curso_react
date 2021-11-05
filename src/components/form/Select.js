import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value}){
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}></select>
            <option>Selecione uma opção</option>
        </div>
    )
}

export default Select