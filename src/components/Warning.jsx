const Warning = (props) => {

    const { show } = props
    
    if(!show){
        return null
    }
    return <p style={{ color: "red" }}>⚠️ Advertencia!</p>;
}

export default Warning
