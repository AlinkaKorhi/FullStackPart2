function Number(props) {
  return (
    <li>
      {props.name} has {props.number} number 
      <button 
        id={props.idProp} 
        onClick={props.deleteNumberProps}>
          Delete
      </button>
    </li>
  )
}

export default Number;