import React from "react";
import styled from "styled-components";

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const CardTitle = styled.div`
  font-size: 1rem;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const QrButton = styled.button`
  width: 120px;
  height: 40px;
  background: #2959d4;
  color: white;
  border: none;
`;

const BalanceButton = styled.button`
  width: 120px;
  height: 40px;
  background: #df6a38;
  color: white;
  margin-left: 10px;
  border: none;
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainCard = ({ bankName, fintechUseNo }) => {
  const handleQrButton = () => {
    window.location.href = `/qr?fintechUseNo=${fintechUseNo}`;
  };
  const handleBalanceButton = () => {
    window.location.href = `/balance?fintechUseNo=${fintechUseNo}`;
  };
  return (
    <CardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <ButtonBlock>
        <QrButton onClick={handleQrButton}>qr코드</QrButton>
        <BalanceButton onClick={handleBalanceButton}>잔액조회</BalanceButton>
      </ButtonBlock>
    </CardBlock>
  );
};

export default MainCard;
