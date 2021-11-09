import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Message from "../components/layout/Message"
import Container from '../components/layout/Container'
import LinkButton from "../components/layout/LinkButton"
import ProjectCard from '../components/projects/ProjectCard'
import {useState, useEffect} from 'react'

function Projects(){
  const [projects, setProjects] = useState([])

  const location = useLocation()
  let message = ''

  if(location.state){
    message = location.state.message
  }

  useEffect(() => {

    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => res.json())
    .then((data) => {
     
      setProjects(data)
     
    })
    .catch(err => console.log(err))
  }, [])

    return (
  <div className={styles.projectContainer}>
   <div className={styles.titleContainer}>
 <h1>Projetcs</h1>
 <LinkButton to="/newproject" text="Criar Projeto!"/>
     </div>   
     {message && <Message  type="sucess" msg={message}/>}
     <Container customClass="start">
      {projects.length > 0 && 
      projects.map((project) => <ProjectCard 
      name={project.name}
      budget={project.budget}
      category={project.category.name}
      key={project.id}

      />)}
     </Container>
  </div>
    )
}

export default Projects