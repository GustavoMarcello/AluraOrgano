import styles from './ListaSuspensa.module.css'

const ListaSuspensa = (props) => {
    return(
        <div className={styles.ListaSuspensa}>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;