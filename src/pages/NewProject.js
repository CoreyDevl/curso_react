import styles from '../../src/components/layout/NewProject.module.css'
import ProjectForm from '../components/projects/ProjectForm'

function NewProject(){
return(
<div className={styles.newProjectContainer}>
    <h1>Criar Projeto</h1>
    <p>Crie seu projeto para depois adicionar os serviço</p>
    <ProjectForm btnText="Criar Projeto"/>
</div>
)
}

export default NewProject