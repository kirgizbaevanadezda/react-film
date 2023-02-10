import { ResetTv } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

function Sorchbar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <div>
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="button-label"></span>
            </button>

            <input
              className=" SearchForm-input SearchForm-inputt"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={handleChange}
            />
          </form>
        </header>
      </div>
    </div>
  );
}

export default Sorchbar;
