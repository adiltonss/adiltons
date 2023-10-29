import { useState ,useRef, useEffect } from 'react'
import './App.scss'
import Aboutme from './components/aboutme/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projs/Projects'
import Footer from './components/footer/Footer'
import PageCompass from './components/pageCompass/PageCompass'

function App() {
  const [currentComponent, setCurrentComponent] = useState('')

  const componentRefs = {
    aboutMe: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    footer: useRef(null)
  };

  const components = {
    aboutme: "aboutme",
    projects: "projects",
    skills: "skills",
    footer: "footer"
  }

  const handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Determinar qual componente está visível com base no elemento DOM
        if (entry.target === componentRefs.aboutMe.current) {
            setCurrentComponent(components.aboutme)
        } else if (entry.target === componentRefs.skills.current) {
            setCurrentComponent(components.skills)
        } else if (entry.target === componentRefs.projects.current) {
            setCurrentComponent(components.projects)
        }else if(entry.target === componentRefs.footer.current){
            setCurrentComponent(components.footer)
        }
      }
    });
  };

  useEffect(() => {
    const observers = Object.values(componentRefs).map(ref => {
      return new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      });
    });

    observers.forEach((observer, index) => {
      if (Object.values(componentRefs)[index].current) {
        observer.observe(Object.values(componentRefs)[index].current);
      }
    });

    // Cleanup: honestamente eu não entendi essa parte, estudar depois ou perguntar pra alguém
    return () => {
      observers.forEach(observer => {
        observer.disconnect();
      });
    };
  }, []); 




  return (
    <>
      <PageCompass currentComp={currentComponent} />
      <div ref={componentRefs.aboutMe}>
        <Aboutme />
      </div>
      <div ref={componentRefs.skills}>
        <Skills />
      </div>
      <div ref={componentRefs.projects}>
        <Projects />
      </div>
      <div ref={componentRefs.footer}>
        <Footer />
      </div>
    </>
  )
}

export default App