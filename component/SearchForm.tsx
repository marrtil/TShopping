import * as React from "react";
import { useState } from "react";
import StyledSearchForm from "./styles/StyledSearchForm";
// import { search } from "../api";
// import axios from "axios";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const textCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchText.length < 2) {
      alert("검색은 두 글자 이상부터 가능합니다.");
      e.preventDefault();
      return;
    }
  };

  return (
    <StyledSearchForm action="search">
      <div className="searchInput">
        <input type="text" name="searchText" onChange={handleChange} placeholder="검색어 입력" />
      </div>
      <button type="submit">검색</button>
    </StyledSearchForm>
  );
}

export default SearchForm;
