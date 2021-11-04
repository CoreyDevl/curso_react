import style from '../components/layout/Home.module.css'
import savings from '../../src/img/savings.svg'
import LinkButton from '../components/layout/LinkButton'

function Home(){
return(
<section className={style.homeContainer}>
    <h1>Bem-vindo ao <span>Costs</span></h1>
    <p>Comece a gerenciar os seus projetos agora mesmo!</p>
    <LinkButton to="/newproject" text="Criar Projeto!"/>
     <img src={savings} alt="costs" />
</section>
)
}

export default Home