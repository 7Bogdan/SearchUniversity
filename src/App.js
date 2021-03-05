import "./App.css";
import Form from "./form/form";
import Wrapper from "./table/wrapper";
import { useState, useEffect } from "react";

function App() {
  let [data, setData] = useState([]);
  let [country, setCountry] = useState("");
  let [name, setName] = useState("");
  let [favorite, setFavorite] = useState("0");

  function serch() {
    fetch(
      "http://universities.hipolabs.com/search?name=" +
        name +
        "&country=" +
        country
    )
      .then((response) => response.json())
      .then(function (response) {
        setData(response);
        localStorage.setItem("universities", JSON.stringify(response));
        localStorage.setItem("country", JSON.stringify(country));
        localStorage.setItem("name", JSON.stringify(name));
      });
  }

  function reset() {
    setData([]);
    setCountry([]);
    setName([]);
    setFavorite(0);
    localStorage.setItem("universities", JSON.stringify([]));
    localStorage.setItem("country", JSON.stringify([]));
    localStorage.setItem("name", JSON.stringify([]));
  }

  function myList(id) {
    if (data[id].checked) {
      data[id].checked = false;
      setFavorite(favorite - 1);
    } else {
      data[id].checked = true;
      setFavorite(favorite + 1);
    }
  }

  useEffect(() => {
    let universities = localStorage.getItem("universities");
    let country = localStorage.getItem("country");
    let name = localStorage.getItem("name");
    let favorite = localStorage.getItem("favorite");
    if (universities) {
      setData(JSON.parse(universities));
      setCountry(JSON.parse(country));
      setName(JSON.parse(name));
      setFavorite(JSON.parse(+favorite));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("universities", JSON.stringify(data));
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div>
      <Form
        serch={serch}
        reset={reset}
        setCountry={setCountry}
        setName={setName}
        country={country}
        name={name}
      />
      <div className="temporary__field">Favorite : {favorite}</div>
      <Wrapper data={data} myList={myList} />
    </div>
  );
}

export default App;
