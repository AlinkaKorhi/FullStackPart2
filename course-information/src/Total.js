const Total = (props) => {
    let sum = 0;
    props.parts.forEach(elem => {
      sum += elem.exercises;
    });
  
    return(
      <p>Number of exercises {sum}</p>
    )
  }

  export default Total;