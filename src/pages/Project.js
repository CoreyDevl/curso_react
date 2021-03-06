import {parse, v4 as uuidv4} from 'uuid'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import styles from './Project.module.css'
import Loading from '../components/layout/Loading'
import Container from '../components/layout/Container'
import ProjectForm from '../components/projects/ProjectForm'
import Message from '../components/layout/Message'
import ServiceForm from '../components/service/ServiceForm'
import ServiceCard from '../components/service/ServiceCard'

function Project(){

const {id} = useParams()
const [project, setProject] = useState([])
const [services, setServices] = useState([])
const [showProjectForm, setShowProjectForm] = useState(false)
const [showServiceForm, setShowServiceForm] = useState(false)
const [message, setMessage] = useState()
const [type, setType] = useState()

useEffect(() => {
 setTimeout(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    })
    .then(res => res.json())
    .then((data) => {
        setProject(data)
        setServices(data.services)
    })
    .catch(err => console.log)
 }, 3000)
}, [id])

    function editPost(project){
        setMessage('')
      //validatio budget
     if(project.budget < project.cost) {
         setMessage('O orçamento não pode ser menor que o custo do projeto!')
         setType('error')
         return false
     }

     fetch(`http://localhost:5000/projects/${project.id}`,{
         method: 'PATCH',
         headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify(project),
     })
        .then(res => res.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('success')
        })
        .catch(err => console.log(err))
    }

    function removeService(id, cost){
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id) 
        const projectUpdated = project
        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
        
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Client-type': 'application/json'
             },
             body: JSON.stringify(projectUpdated)
        })
        .then((res) => res.json())
        .then((data) => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setMessage('Serviço removido com sucesso!') //essa foi a ultima linha do projeto!
        })
        .catch(err => console.log(err))
        
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }
    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function createService(project){
        setMessage('')
        // lastService
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
        //maximum value validation
        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado. Verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }
        //add service cost to project total cost
        project.cost = newCost
        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        .then((data => {
           setShowServiceForm(false)
        }))
        .catch(err => console.log(err))
    }

    return (
    <>
{project.name ? (
<div className={styles.project_details}>
<Container className="column">
    {message && <Message type={type} msg={message} />}
    <div className={styles.details_container}>
        <h1>Projeto: {project.name}</h1>
        <button className={styles.btn} onClick={toggleProjectForm}>
            {!showProjectForm ? 'Editar projeto': 'Fechar'}
        </button>
        {!showProjectForm ? (
            <div className={styles.project_info}>
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
            <div className={styles.project_info}>
            <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
            </div>
        )}
    </div>
    <div className={styles.service_form_container}>
        <h2>Adicione um serviço:</h2>
        <button className={styles.btn} onClick={toggleServiceForm}>
            {!showServiceForm ? 'Adicionar serviço': 'Fechar'}
        </button>
    </div>
    <div className={styles.project_info}>
    {showServiceForm && (
        <ServiceForm 
        handleSubmit={createService}
        btnText="Adicionar serviço"
        projectData={project}
        />
    )}
    </div>
    <h2>Serviços:</h2>
    <Container customClass="start">
    {services.length > 0 &&
    services.map((service) => (
        <ServiceCard 
        id={service.id}
        name={service.name}
        cost={service.cost}
        description={service.description}
        key={service.id}
        handleRemove={removeService}
        />
    ))}
    {services.length === 0 && <p>Não existem serviços cadastrados neste projeto.</p>}
    </Container>
</Container>
</div> 
):(  <Loading />
       )} 
   </>
    )
}

export default Project