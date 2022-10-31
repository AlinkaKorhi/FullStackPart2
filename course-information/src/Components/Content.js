import { createElement } from 'react';
import Part from '../Components/Part.js'

const Content = (props) => {
    let prtsContent = props.parts.map((elem, i) => (
      <Part key={elem.name+i} part={elem.name} exercises={elem.exercises}/>
    ));
  
    let divContent = createElement('div', null, prtsContent);
  
    return(
      divContent
    )
  };

  export default Content;