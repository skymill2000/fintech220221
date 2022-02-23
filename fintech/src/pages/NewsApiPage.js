import React, { useState } from "react";
import HeaderWhite from "../components/HeaderWhite";
import NewsList from "../components/News/NewsList";
import SearchInput from "../components/News/SearchInput";

const NewsApiPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);

  const handleSearchTextChange = () => {
    //   input 변경사항을 search Text 반영
  };

  const handleSearchButtonClick = () => {
    //   axios 통해 newsList 요청하기
  };

  return (
    <div>
      <HeaderWhite title="뉴스 검색"></HeaderWhite>
      <SearchInput
        handleChange={handleSearchTextChange}
        handleClick={handleSearchButtonClick}
      ></SearchInput>
      <NewsList searchResultList={searchResultList}></NewsList>
    </div>
  );
};

export default NewsApiPage;
