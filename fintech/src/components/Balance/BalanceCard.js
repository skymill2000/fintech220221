import React from "react";
import styled from "styled-components";

const BalanceBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  margin: 1rem;
  padding: 1rem;
`;
const BankName = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
const FintechNo = styled.div``;

const BalanceText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
  text-align: right;
`;

const BalanceCard = ({ bankName, fintechNo, balance }) => {
  return (
    <BalanceBlock>
      <BankName>{bankName}</BankName>
      <FintechNo>{fintechNo}</FintechNo>
      <BalanceText>{balance}원</BalanceText>
    </BalanceBlock>
  );
};

export default BalanceCard;
