function Filter(props){

    return(
            <input value={props.filter} onChange={props.handleClick} />
    
    )
}

export default Filter