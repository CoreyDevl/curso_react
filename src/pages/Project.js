import styles from './Project.module.css'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from '../components/layout/Loading'
import Container from '../components/layout/Container'

function Project(){

const {id} = useParams()
const [project, setProject] = useState([])
const [showProjectForm, setShowProjectForm] = useState(false)


useEffect(() => {
 setTimeout(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    })
    .then(res => res.json())
    .then((data) => {
        setProject(data)
    })
    .catch(err => console.log)
 }, 3000)
}, [id])

    function togleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
 
    return (
    <>
       {project.name ? (
       <div className={styles.project_details}>
           <Container className="column">
               <div className={styles.details_container}>
                   <h1>Projeto: {project.name}</h1>
                   <button onClick={togleProjectForm}>
                       {!showProjectForm ? 'Editar projeto': 'Fechar'}
                    </button>
                    {!showProjectForm ? (
                        <div className={styles.project_details}>
                            <p>
                                <span>Categoria:</span> {project.category.name}
                            </p>
                            <p>
                                <span>Total de Orçamento:</span> R${project.budget}
                            </p>
                            <p>
                                <span>Total de Utilizado:</span> R${project.cost}
                            </p>
                        </div>
                    ):(
                        <div>
                        <p>detalhes do projeto</p>
                        </div>
                    )}
               </div>
           </Container>
       </div> 
        ):(  <Loading />
       )} 
   </>
    )
}

export default Project