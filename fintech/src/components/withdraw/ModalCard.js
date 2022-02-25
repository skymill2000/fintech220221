import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  // input data 받아온다음에 결제 버튼을 눌렀을때 axios 출금 이체를 바생시키기;
  const [amount, setamount] = useState("");
  const handleAmountChange = (e) => {
    const { value } = e.target;
    setamount(value);
  };
  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  const handleWithdraw = () => {
    //axios call
    //출금 이체 API 요청 작성하기
  };

  const deposit = () => {};

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}에 출금이체를 발생시킵니다.</p>
      <input onChange={handleAmountChange}></input>
      <WithDrawButton onClick={handleWithdraw}>결제하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
