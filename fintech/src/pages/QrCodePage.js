import React from "react";
import HeaderWhite from "../components/HeaderWhite";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const QRCode = require("qrcode.react");

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  const { search } = useLocation(); //query string get
  const { fintechUseNo } = queryString.parse(search);

  return (
    <div>
      <HeaderWhite title={"QR 코드 생성"}></HeaderWhite>
      <QRBlock>
        <QRCode size={200} value={fintechUseNo} />
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
