import './App.css'
import ProjectComponent from './components/ProjectComponent'
import TitleComponent from './components/Title'
import { Projects } from './Data';


function App() {
  return (
    <div className='AppContainer'>
      <TitleComponent text="Projects"/>
      {Projects.map((v) => {
        return <ProjectComponent project={v} />
      })}
    </div>
  )
}

export default App;
