import './App.css'
import ProjectComponent from './components/ProjectComponent'
import TitleComponent from './components/Title'
import { Projects } from './Projects';
import { Pages } from "./Pages";
import PageComponent from './components/PageComponent';


function App() {
  return (
    <div className='AppContainer'>
      <TitleComponent text="Projects"/>
      <ProjectComponent projects={Projects}/>
      <TitleComponent text="Other Pages"/>
      <PageComponent pages={Pages}/>
    </div>
  )
}

export default App;
