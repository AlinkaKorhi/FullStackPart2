function CountryItem(props){
    return(
        <div>
            <p>{props.name}</p>
            <button 
                id={props.name} 
                onClick={props.showCountryInfo}>
                show
            </button>
        </div>
    )      
}

export default CountryItem