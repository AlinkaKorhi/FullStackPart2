const Total = (props) => {
  let partData = props.parts;

  let sum = partData.reduce((s, p) => s+p.exercises, 0);
  
  return(
    <p style={{'fontWeight': "bold"}}>Total: {sum}</p>
  )
  }

  export default Total;