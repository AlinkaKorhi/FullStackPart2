function CountryInfo(props){
    let countryForInfo;
    if (props.countryOne !== ''){
        countryForInfo = props.countryOne;
    }
    else{
        countryForInfo = props.country[0]
    }

    let flagUrl = countryForInfo.flags.png

    return(
        <div>
            <h1>{countryForInfo.name.common}</h1>
            <p>capital: {countryForInfo.capital[0]}</p>
            <p>area: {countryForInfo.area}</p>
            <h2>Languages:</h2>
            <ul>
                {Object.values(countryForInfo.languages).map(elem =>
                    <li key={elem}>{elem}</li>)}
            </ul>
            <img src={flagUrl}></img>
        </div>
    )
}

export default CountryInfo