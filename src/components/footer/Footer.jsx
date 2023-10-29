import styles from './Footer.module.scss';
import instagram from '../../assets/icons/instagram.svg'
import linkedIn from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg'

export default function Footer(){
    return(
        <section id="contact" className={styles.cont}>
            <h2>Onde me econtrar</h2>
            <div className={styles.mainCont}>
                <div className={styles.socialLinks}>
                    <div className={styles.item}>
                        <a href="https://github.com/adiltonss" target='blank'></a>
                        <img src={github} alt="Github Icon" />
                    </div>
                    <div className={styles.item}>
                        <a href="https://linkedin.com/in/adilton-santos-6b136b203/" target='blank'></a>
                        <img src={linkedIn} alt="LinkedIn Icon" />
                    </div>
                    <div className={styles.item}>
                        <a href="https://www.instagram.com/adilton_y/" target='blank'></a>
                        <img src={instagram} alt="Instagram Icon" />
                    </div>
                </div>
                <div className={styles.footerHero}>
                    <div></div>
                </div>
            </div>
        </section>
    )
}