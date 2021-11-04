import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./NavBar.module.css"
import logo from "../../img/costsLogo.png"

function NavBar(){
    return(
      <nav class={styles.navbar}>
       <Container>
         <Link to="/">
           <img src={logo} alt="costs" />
         </Link>
         <ul class={styles.list}>
        <li class={styles.item}>
        <Link to="/">Home</Link>
        </li>
        <li class={styles.item}>
        <Link to="/contato">Contato</Link>
        </li>
        <li class={styles.item}>
        <Link to="/empresa">Empresa</Link>
        </li>
         </ul>
       </Container>
      </nav>
    )
}
export default NavBar