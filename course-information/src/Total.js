const Total = (props) => {
    let sum = 0;
    props.parts.forEach(elem => {
      sum += elem.exercises;
    });
  
    return(
      <p style={{'fontWeight': "bold"}}>Total: {sum}</p>
    )
  }

  export default Total;