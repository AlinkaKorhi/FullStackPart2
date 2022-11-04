import CountryInfo from './CountryInfo'

function ResultFilter(props){
    if (props.countriesData.length>10){
        return(
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
    else{

        if (props.countriesData.length==1){
            return(
                <div>
                    <CountryInfo country={props.countriesData}/>     
                </div>
            ) 
        }
        else{
            return(
                <div>
                    {props.countriesData.map(country => 
                        <p key={country.name.common}>{country.name.common}</p>
                    )}        
                </div>
            ) 
        }               
    }    
}

export default ResultFilter