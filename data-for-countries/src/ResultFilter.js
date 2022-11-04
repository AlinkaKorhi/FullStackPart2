import CountryInfo from './CountryInfo'
import CountryItem from './CountryItem'

function ResultFilter(props){
    if (props.showOnlyOne !== null){
        return(
            <CountryInfo 
                countryOne={props.showOnlyOne} 
            />     
        )
    }


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
                    <CountryInfo country={props.countriesData} countryOne=''/>     
                </div>
            ) 
        }
        else{
            return(
                <div>
                    {props.countriesData.map(country => 
                        <CountryItem 
                            key={country.name.common} 
                            name={country.name.common} 
                            country={country} 
                            showCountryInfo={props.showCountryInfo}
                        />
                    )}        
                </div>
            ) 
        }               
    }    
}

export default ResultFilter