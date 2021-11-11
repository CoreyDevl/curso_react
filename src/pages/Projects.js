import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Message from "../components/layout/Message"
import Container from '../components/layout/Container'
import LinkButton from "../components/layout/LinkButton"
import ProjectCard from '../components/projects/ProjectCard'
import Loading from "../components/layout/Loading"
import {useState, useEffect} from 'react'

function Projects(){
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projectMessage, setProjectMessage] = useState('')
  const location = useLocation()
  let message = ''

  if(location.state){
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.json())
      .then((data) => {
       
        setProjects(data)
        setRemoveLoading(true)
       
      })
      .catch(err => console.log(err))
    }, 3000)

  }, [])

    function removeProject(id){
      
      fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
  },
  })
  .then((res) => res.json())
  .then(data => {
    setProjects(projects.filter((project) => project.id !== id))
    setProjectMessage('Projeto removido com sucesso!')
  })
  .catch(err => console.log(err))
}
    return (
  <div className={styles.projectContainer}>
   <div className={styles.titleContainer}>
 <h1>Projetcs</h1> 
 
 <LinkButton to="/newproject" text="Criar Projeto!"/>
     </div>   
     {message && <Message  type="sucess" msg={message}/>}
     {projectMessage && <Message  type="sucess" msg={projectMessage}/>}
     <Container customClass="start">
      {projects.length > 0 && 
      projects.map(({
        id, name, budget, category
      }) => {
         
        return (
          <ProjectCard 
          name={name}
          budget={budget}
          category={category.name}
          key={id}
          handleRemove={removeProject}
          id = {id}
          />)}
        )
      }
      {!removeLoading && <Loading />}
      {removeLoading && projects.length === 0 && (
        <p>Não há projetos cadastrados!</p>
      )}
     </Container>
  </div>
    )
}

export default Projects