import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import styles from "./Footer.module.css"
function Footer(){
    return(
       <footer className={styles.footer}>
           <ul className={styles.socialMedia_list}>
           <li><FaLinkedin/></li>
           <li><FaInstagram/></li> 
           <li><FaFacebook/></li>
           </ul>
           <p className={styles.copyRight}><span>Costs by Corey Pages!</span> &copy; 2021</p>
       </footer>
    )
}
export default Footer