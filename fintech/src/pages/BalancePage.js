import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import HeaderWhite from "../components/HeaderWhite";
import BalanceCard from "../components/Balance/BalanceCard";
import TransactionList from "../components/Balance/TransactionList";

const BalancePage = () => {
  console.log(useLocation());
  useEffect(() => {
    getUserBalance();
    getTrasactionList();
  }, []);

  const { fintechUseNo } = queryString.parse(useLocation().search);
  const [balance, setbalance] = useState("");
  const [transactionList, settransactionList] = useState([]);

  console.log(fintechUseNo);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };

  const getUserBalance = () => {
    //   request 생성 / 응답을 text 출력
    const accessToken = localStorage.getItem("accessToken");
    const sendData = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNo,
      tran_dtime: "20220224154030",
    };

    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData, //object
    };

    axios(option).then(({ data }) => {
      console.log(data);
      setbalance(data);
    });
  };

  const getTrasactionList = () => {
    const accessToken = localStorage.getItem("accessToken");
    const sendData = {
      bank_tran_id: genTransId(),
      fintech_use_num: fintechUseNo,
      inquiry_type: "A",
      inquiry_base: "D",
      from_date: "20190101",
      to_date: "20190101",
      sort_order: "D",
      tran_dtime: "20220224154030",
    };

    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: sendData, //object
    };

    axios(option).then(({ data }) => {
      settransactionList(data.res_list);
    });
  };

  return (
    <div>
      <HeaderWhite title="잔액조회"></HeaderWhite>
      <BalanceCard
        bankName={balance.bank_name}
        fintechNo={balance.fintech_use_num}
        balance={balance.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={transactionList}></TransactionList>
    </div>
  );
};

export default BalancePage;
