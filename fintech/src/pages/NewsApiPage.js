import axios from "axios";
import React, { useState } from "react";
import HeaderWhite from "../components/HeaderWhite";
import NewsList from "../components/News/NewsList";
import SearchInput from "../components/News/SearchInput";

const NewsApiPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);

  const handleSearchTextChange = (e) => {
    //   input 변경사항을 search Text 반영
    const { value } = e.target;
    console.log(value);
    setSearchText(value);
    console.log("searchText : ", searchText);
  };

  const handleSearchButtonClick = () => {
    //   axios 통해 newsList 요청하기 searchInput 데이터를 news api 에 요청
    const searchApiUrl = `https://newsapi.org/v2/everything?q=${searchText}&from=2022-01-23&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`;
    axios
      .get(searchApiUrl)
      .then((response) => {
        console.log(response);
        setSearchResultList(response.data.articles);
        console.log("뉴스 리스트 데이터는 : ", searchResultList);
      })
      .catch((err) => {
        console.error(err);
      });
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
