import type { Project } from "../models/Project"
import "./Project.css"

function ProjectComponent({project}: {project: Project}) {

    return <div className="ProjectContainer">
        <label className="ProjectNameLabel">{project.name}</label>
        <div className="ProjectInfoContainer">
            <label className="ProjectDescLabel">{project.desc}</label>
            <div className="LinkContainer">
                <a className="ProjectLink" href={project.repo.url}>{project.repo.plaintext}</a>
                <a className="ProjectLink" href={project.url.url}>{project.url.plaintext}</a>
            </div>
        </div>
    </div>
}

export default ProjectComponent