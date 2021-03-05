function Table(props) {
  return (
    <table border="1" width="100%" cellPadding="5">
      <thead>
        <tr>
          <th>My list</th>
          <th>Number</th>
          <th>Name</th>
          <th>Web site</th>
          <th>Domains</th>
          <th>letter code of countries</th>
          <th>Country</th>
          <th>State\Province</th>
        </tr>
      </thead>
      {props.children}
    </table>
  );
}

export default Table;
