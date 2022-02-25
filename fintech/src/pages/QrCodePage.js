import React from "react";
import HeaderWhite from "../components/HeaderWhite";
const QRCode = require("qrcode.react");

const QrCodePage = () => {
  return (
    <div>
      <HeaderWhite title={"QR 코드 생성"}></HeaderWhite>
      <QRCode size={200} value="http://facebook.github.io/react/" />
    </div>
  );
};

export default QrCodePage;
