import type { Project } from "../models/Project"
import "./Project.css"

function ProjectComponent({project}: {project: Project}) {
    return <div className="ProjectContainer">
        {project.name} <br />
        {project.repo} <br />
        {project.url} <br />
    </div>
}

export default ProjectComponent