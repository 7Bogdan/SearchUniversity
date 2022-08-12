
function Row(props) {

  return (
    <tr>
      <td className="table__number"> {props.index+1} </td>
      <td className="table__checkbox">
      <input type="checkbox"
        onClick={()=>props.myList(props.index)}
        defaultChecked={props.checked}
      /> </td>
      <td> {props.data.name}</td>
      <td>
        <a href={props.data.web_pages} title={props.data.name} target="_blank">
          {" "}
          {props.data.web_pages}
        </a>{" "}
      </td>
      <td> {props.data.domains} </td>
      <td className= "table__LC"> {props.data.alpha_two_code} </td>
      <td> {props.data.country} </td>
      <td> {props.data.['state-province']} </td>
    </tr>
  );
}

export default Row;
