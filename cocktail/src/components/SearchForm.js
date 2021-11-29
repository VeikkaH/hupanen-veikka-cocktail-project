import React from "react";

function SearchForm({ setSearchTerm }) {
  React.useEffect(() => {
    searchValue.current.focus();    //Form is selected when loading into page
  });

  const searchValue = React.useRef("");
  //useRef saves input
  
  const searchcocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section">
      <img src={'Logo.png'} className="App-logo" alt="logo" />
      <form className="form search-form" >
        <div className="form-control">
          <label htmlFor="name">Search for cocktails by name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchcocktail}
            ref={searchValue}
            placeholder="Mojito" 
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;