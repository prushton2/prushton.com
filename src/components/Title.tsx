import "./Title.css"

function TitleComponent({text}: {text: string}) {
    return <div className="TitleContainer">
        {text}
    </div>
}

export default TitleComponent