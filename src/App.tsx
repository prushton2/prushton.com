import './App.css'
import ProjectComponent from './components/ProjectComponent'
import type { Project } from './models/Project'

function App() {
  const p1 = {
    name: "Bython",
    repo: "https://github.com/prushton2/bython",
    url: "https://pypi.org/project/bython-prushton/"
  } as Project

  return (
    <>
      <ProjectComponent project={p1}/>
    </>
  )
}

export default App
