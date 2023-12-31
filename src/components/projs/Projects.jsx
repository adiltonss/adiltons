import styles from './Projects.module.scss'
import coffeStackpreview from "../../assets/images/coffe stack.jpeg"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function Projects(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 800 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 799, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return(
        <section id="projects" className={styles.cont}>
            <h2>Últimos projetos</h2>
            <div className={styles.projects}>
                <Carousel 
                responsive={responsive} 
                className={styles.carouselMobile}
                swipeable={true}
                draggable={true}
                >
                    <div className={styles.item}>
                        <div className={styles.imgCont}>
                            <img src={coffeStackpreview} alt="" />
                            <a href="https://stack-coffee.vercel.app/" target='blank'></a>
                        </div>

                        <h3><a href="https://stack-coffee.vercel.app/" target='blank'
                        >Coffe Stack</a></h3>
                        <p>Uma landing page feita para um café, feita com tecnologias específicas para tornar a página atrativa e fornecer uma fantástica experiência.</p>
                    </div>
                    <div className={styles.item}>
                        <img/>
                        <h3>Em breve...</h3>
                        <p></p>
                    </div>
                    <div className={styles.item}>
                        <img/>
                        <h3>Em breve...</h3>
                        <p></p>
                    </div>
                    <div className={styles.item}>
                        <img/>
                        <h3>Em breve...</h3>
                        <p></p>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}