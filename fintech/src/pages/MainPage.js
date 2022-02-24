import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderWhite from "../components/HeaderWhite";

const MainPage = () => {
  useEffect(() => {
    getAccountList();
  }, []);

  const [accountList, setaccountList] = useState([]);

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");

    const sendData = {
      user_seq_no: userSeqNo,
    };

    const option = {
      method: "GET",
      url: "/v2.0/user/me",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData, //object
    };

    axios(option).then(({ data }) => {
      console.log(data);
      //setaccountList()
    });
    //#work7 사용자 정보 조회 API 를 통해 accountList 에 계좌 목록을 저장 axios ; 메뉴얼 참고
    //1. axios 요청 작성
    // get 방식 : url 데이터 지정 / data 항목대신 params 라는 항목 사용 가능
    //2. setaccountList 실행
  };

  return (
    <div>
      <HeaderWhite title={"메인페이지(계좌목록)"}></HeaderWhite>
    </div>
  );
};

export default MainPage;
