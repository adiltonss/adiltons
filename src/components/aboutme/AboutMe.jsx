import styles from './Aboutme.module.scss'

export default function Aboutme(){
    function goToTarget(){
        const targetEl = document.getElementById("contact")
        window.scrollTo({
            top:targetEl.offsetTop,
            behavior:"smooth"
        })
    }
    
    return(
        <section id="aboutme" className={styles.cont}>
            <div className={styles.txtCont}>
                <div className={styles.titleCont}>
                    <h1>Adilton Santos</h1>
                    <h2>desenvolvedor front end</h2> 
                </div>
                <p>27 anos, apaixonado por programação, games e hardware, estudante de ánalise e desenvolvimento de sistemas, focado em desenvolvimento web front end, na criação e atualização de sites e aplicações web.</p>
                <button onClick={goToTarget}>Contato</button>
            </div>
            <div className={styles.imgCont}>
                <div className={styles.astronaut}></div>
            </div>
        </section>
    )
}