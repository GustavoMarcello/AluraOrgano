import styles from './Banner.module.css'
const Banner = () => {
    //JSX
    return (
        <header className={styles.banner}>
            <img src="/images/banner.png" alt="banner principal"/>
        </header>
    )
}

export default Banner;