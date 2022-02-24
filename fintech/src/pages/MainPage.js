import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderWhite from "../components/HeaderWhite";
import MainCard from "../components/Main/MainCard";

const MainPage = () => {
  useEffect(() => {
    getAccountList();
  }, []);

  const [accountList, setaccountList] = useState([]);

  const getAccountList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const userSeqNo = localStorage.getItem("userSeqNo");

    console.log(userSeqNo);

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
      const accountListFromRequest = data.res_list;
      setaccountList(accountListFromRequest);
      //setaccountList()
    });
  };

  return (
    <div>
      <HeaderWhite title={"메인페이지(계좌목록)"}></HeaderWhite>
      {accountList.map(({ fintech_use_num, bank_name }) => {
        return (
          <MainCard
            bankName={bank_name}
            fintechUseNo={fintech_use_num}
          ></MainCard>
        );
      })}
    </div>
  );
};

export default MainPage;
