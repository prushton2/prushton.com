import type { Page } from "../models/Page"
import "./Page.css"

function PageComponent({pages}: {pages: Page[]}) {
    return <div className="PageContainer">
        {pages.map((e) => <Page page={e}/>)}
    </div>
}

function Page({page}: {page: Page}) {
    return <div className="Page" onClick={() => {window.location.assign(page.page)}}>
        <label className="PageNameLabel">{page.name}</label>
        <img src="https://github.githubassets.com/favicons/favicon-dark.png" className="PageRepoIcon" onClick={(e) => {e.stopPropagation(); window.location.assign(page.repo)}} />
        <label className="PageInfoContainer">{page.desc}</label>
    </div>
}

export default PageComponent