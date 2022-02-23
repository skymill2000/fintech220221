import axios from "axios";
import React from "react";
import HeaderWhite from "../components/HeaderWhite";

const AxiosTest = () => {
  const handleClick = () => {
    console.log("click");
    axios
      .get("https://naver.com")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <HeaderWhite title="Http 통신" />
      <button onClick={handleClick}>데이터 요청하기</button>
    </div>
  );
};

export default AxiosTest;
