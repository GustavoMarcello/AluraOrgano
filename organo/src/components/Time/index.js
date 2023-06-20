import Colaborador from '../Colaborador';
import styles from './Time.module.css'

const Time = (props) => { 
    return(
        (props.colaboradores.length > 0) && <section className={styles.Time} style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className={styles.colaboradores}>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
 }

 export default Time;