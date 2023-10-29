import styles from './Navbar.module.scss'

export default function Navbar(){
    return (
        <nav className={styles.cont}>
            <ul>
                <li>Sobre mim</li>
                <li>Skills</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}