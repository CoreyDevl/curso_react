import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NewProject from './pages/NewProject';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container'
import Projects from './pages/Projects';
import Project from './pages/Project';
function App() {
 
     return (
 <Router>
<NavBar />
   <Switch>
     <Container customClass="minHeight">
       <Route exact path="/">
         <Home />
       </Route>
       <Route path="/empresa">
         <Empresa />
       </Route>
       <Route path="/projects">
         <Projects />
       </Route>
       <Route path="/contato">
         <Contato />
       </Route>
       <Route path="/newproject">
         <NewProject />
         </Route>
       <Route path="/project/:id">
         <Project />
       </Route>
     </Container>
   </Switch>
   <Footer/>
 </Router>
  );
}

export default App;
