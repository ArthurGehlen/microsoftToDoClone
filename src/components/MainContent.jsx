function MainContent(props) {
    return <div className={`main_content ${props.customClass}`}>{props.children}</div>
}

export default MainContent