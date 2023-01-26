import * as React from "react";
import { useState } from "react";
import StyledSearchForm from "./styles/StyledSearchForm";
// import { search } from "../api";
// import axios from "axios";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  let sessionStorage = window.sessionStorage;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (searchText.length < 2) {
      console.log("여기?");
      alert("검색은 두 글자 이상부터 가능합니다.");
      e.preventDefault();
    } else {
      sessionStorage.setItem("itemName", searchText);
    }
  };

  return (
    <StyledSearchForm action="/productList" id="submit" onSubmit={searchSubmit}>
      <div className="searchInput">
        <input
          type="text"
          name="searchText"
          onChange={handleChange}
          placeholder="검색어 입력"
        />
      </div>
      <button type="submit">검색</button>
    </StyledSearchForm>
  );
}

export default SearchForm;
