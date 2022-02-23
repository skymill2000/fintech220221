import React from "react";
import HeaderWhite from "../components/HeaderWhite";
import NewsList from "../components/News/NewsList";
import SearchInput from "../components/News/SearchInput";

const NewsApiPage = () => {
  return (
    <div>
      <HeaderWhite title="뉴스 검색"></HeaderWhite>
      <SearchInput></SearchInput>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsApiPage;
