import styles from './PageCompass.module.scss'

export default function PageCompass({currentComp}) {
    function goToTarget(id){
        const targetEl = document.getElementById(id)
        window.scrollTo({
            top:targetEl.offsetTop - 50,
            behavior:"smooth"
        })
    }
    
    return (
        <div className={styles.cont}>
            <div className={`${styles.circle} ${currentComp === 'aboutme' ? styles.filled : ''}`}>
                <button onClick={() => goToTarget("aboutme")} className={`${styles.compTitle} ${currentComp === 'aboutme' ? styles.active : ''}`}>Sobre mim</button>
            </div>
            <div className={styles.line}></div>
            <div className={`${styles.circle} ${currentComp === 'skills' ? styles.filled : ''}`}>
                <button onClick={() => goToTarget("skills")} className={`${styles.compTitle} ${currentComp === 'skills' ? styles.active : ''}`}>Skills</button>
            </div>
            <div className={styles.line}></div>
            <div className={`${styles.circle} ${currentComp === 'projects' ? styles.filled : ''}`}>
                <button onClick={() => goToTarget("projects")} className={`${styles.compTitle} ${currentComp === 'projects' ? styles.active : ''}`}>Projetos</button>
            </div>
            <div className={styles.line}></div>
            <div className={`${styles.circle} ${currentComp === 'footer' ? styles.filled : ''}`}>
                <button onClick={() => goToTarget("contact")} className={`${styles.compTitle} ${currentComp === 'footer' ? styles.active : ''}`}>Contato</button>
            </div>
        </div>
    )
}