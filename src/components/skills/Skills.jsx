import styles from './Skllis.module.scss'
import reactIcon from  '../../assets/icons/react-original.svg'
import jsIcon from '../../assets/icons/javascript-original.svg'
import htmlIcon from '../../assets/icons/html5-original.svg'
import cssIcon from '../../assets/icons/css3-original.svg'
import sassIcon from '../../assets/icons/sass-original.svg'
import gitIcon from '../../assets/icons/git-original.svg'


export default function Skills(){
    const icons = [
        {
            icon: reactIcon,
            title: "React Js",
            desc: "Para criação de interfaces interativas em websites e aplicativos",
            id: 1
        },
        {
            icon: jsIcon,
            title: "Javascript",
            desc: "Linguagem de programação para desenvolvimento web e aplicativos interativos",
            id: 2
        },
        {
            icon: htmlIcon,
            title: "HTML",
            desc: "Estrutura básica para conteúdo na internet",
            id: 3
        },
        {
            icon: cssIcon,
            title: "CSS",
            desc: "Estilo para design e layout, personaliza a aparência das páginas",
            id: 4
        },
        {
            icon: sassIcon,
            title: "Sass",
            desc: "Pré-processador CSS que facilita a estilização complexa e reutilizável",
            id: 5
        },
        {
            icon: gitIcon,
            title: "Git",
            desc: "Sistema de controle de versão para colaboração e rastreamento de alterações",
            id: 6
        },

    ]
    
    return(
        <section id='skills' className={styles.cont}>
            <h2>Skills</h2>
            <div className={styles.skills}>
                {
                    icons.map(item => (
                        <div className={styles.skill} key={item.id}>
                            <div className={styles.icon}>
                                <img src={item.icon} alt="React Js icon" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}