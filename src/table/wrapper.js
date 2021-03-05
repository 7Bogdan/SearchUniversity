import "./wrapper.css";
import Row from "./row";
import Table from "./table";

function Wrapper(props) {
  if (props.data.length <= 0) {
    return (
      <div className="temporary__field">
        <h2>First enter the country</h2>
      </div>
    );
  } else {
    return (
      <Table>
        <tbody>
          {props.data.map((data, index) => (
            <Row
              key={index}
              data={data}
              index={index}
              myList={props.myList}
              checked={data.checked}
            />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Wrapper;
