import "./Title.css"

function TitleComponent({text}: {text: string}) {
    return <div className="TitleContainer">
        <h3>{text}</h3>
    </div>
}

export default TitleComponent