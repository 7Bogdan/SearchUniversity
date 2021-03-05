import "./form.css";

function Form(props) {

  function submit(e) {
    e.preventDefault();
    props.serch()
  }

  return (
    <form className="form__search" onSubmit={(e) => submit(e)}>
      <h1 className="form__title">Search Universities for country or name </h1>
      <h2 className="form__title" >Country is required/Name isn't required</h2>
      <div className="form__field">
        <label >

          <input
            className="form__input"
            type="text"
            placeholder="Ukraine"
            required
            value ={props.country}
            onChange={(event) => props.setCountry(event.target.value)}
          />
            <input
            className="form__input form__input__middle"
            type="text"
            placeholder="Medical"
            value ={props.name}
            onChange={(event) => props.setName(event.target.value)}
          />
        </label>
        <button type="submit" className="form__button">
          <svg fill="#ffffff" height="20px" width="20px" viewBox="0 0 20 20">
            <path d="M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"></path>
          </svg>
        </button>
        <button type="button" className="form__button final__button" onClick={()=>props.reset()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 40.5 42.17"
            fill="#ffffff"
          >
            <path d="M29.4,2.65A20.85,20.85,0,0,0,8,3.64L4.92.59A2,2,0,0,0,1.5,2V13.18a2,2,0,0,0,2,2H14.67a2,2,0,0,0,1.42-3.42L13.81,9.48A13,13,0,1,1,7.68,26.56a2,2,0,0,0-2.43-1L1.43,26.66A2,2,0,0,0,.15,29.32,21,21,0,1,0,29.4,2.65Z" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Form;
