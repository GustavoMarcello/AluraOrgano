import styles from './Botao.module.css'

const Botao = (props) => {
    return(
        <button className={styles.Botao}>
            {props.children}
        </button>
    )
}

export default Botao;