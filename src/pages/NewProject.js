import styles from '../../src/components/layout/NewProject.module.css'
import ProjectForm from '../components/projects/ProjectForm'

import {useHistory} from 'react-router-dom'
function NewProject(){

    const history = useHistory()
function createPost(project){
    //initialize cost and services
    project.cost=0
    project.services=[]

    fetch("http://localhost:5000/project", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(project),
    })
    .then((res) => res.json())
    .then((data) => {
         console.log(data)
         //depois tem o Redirect
         history.push('/projects', {message: 'Projeto criado com sucesso!'})
    })
    .catch(err => console.log(err))
}


return(
<div className={styles.newProjectContainer}>
    <h1>Criar Projeto</h1>
    <p>Crie seu projeto para depois adicionar os serviços</p>
    <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
</div>
)
}

export default NewProject