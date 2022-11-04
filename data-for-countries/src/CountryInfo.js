function CountryInfo(props){

    let flagUrl = props.country[0].flags.png

    return(
        <div>
            <h1>{props.country[0].name.common}</h1>
            <p>capital: {props.country[0].capital[0]}</p>
            <p>area: {props.country[0].area}</p>
            <h2>Languages:</h2>
            <ul>
                {Object.values(props.country[0].languages).map(elem =>
                    <li key={elem}>{elem}</li>)}
            </ul>
            <img src={flagUrl}></img>
        </div>
    )
}

export default CountryInfo