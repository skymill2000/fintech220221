import React from "react";
import HeaderWhite from "../components/HeaderWhite";
import styled from "styled-components";

const QRCode = require("qrcode.react");

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  return (
    <div>
      <HeaderWhite title={"QR 코드 생성"}></HeaderWhite>
      <QRBlock>
        <QRCode size={200} value="http://facebook.github.io/react/" />
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
