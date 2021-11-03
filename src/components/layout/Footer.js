import {FaFacebook, FaInstagram, FaPinterest} from "react-icons/fa"
import styles from "./Footer.module.css"
function Footer(){
    return(
       <footer>
           <ul className={styles.socialMedia_list}>
           <li><FaPinterest/></li>
           <li><FaInstagram/></li> 
           <li><FaFacebook/></li>
           </ul>
           <p>Footer!</p>
       </footer>
    )
}
export default Footer