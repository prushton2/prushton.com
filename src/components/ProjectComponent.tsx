import { useState, type JSX } from "react"
import type { Project } from "../models/Project"
import "./Project.css"

function ProjectComponent({project}: {project: Project}) {
    const [clicked, setClicked] = useState<boolean>(false)

    const expandedJSX: JSX.Element = <>
        <a className="ProjectLink" href={project.repo.url}>{project.repo.plaintext}</a>
        <a className="ProjectLink" href={project.url.url}>{project.url.plaintext}</a>
    </>

    return <div className="ProjectContainer" onClick={() => setClicked(!clicked)}>
        <label className="ProjectNameLabel">{project.name}</label>
        <label className="ProjectDescLabel">{project.desc}</label>
        {clicked ? expandedJSX: <></>}
    </div>
}

export default ProjectComponent