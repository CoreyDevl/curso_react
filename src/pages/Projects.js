import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Message from "../components/layout/Message"
import Container from '../components/layout/Container'
import LinkButton from "../components/layout/LinkButton"

function Projects(){

  const location = useLocation()
  let message = ''
  if(location.state){
    message = location.state.message
  }
    return (
  <div className={styles.projectContainer}>
   <div className={styles.titleContainer}>
 <h1>Projetcs</h1>
 <LinkButton to="/newproject" text="Criar Projeto!"/>
     </div>   
     {message && <Message  type="sucess" msg={message}/>}
     <Container customClass="start">
       <p>Projetos</p>
     </Container>
  </div>
    )
}

export default Projects