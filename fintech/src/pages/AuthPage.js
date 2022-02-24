import React from "react";
import HeaderWhite from "../components/HeaderWhite";

const AuthPage = () => {
  const handleAuthBtnClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF"; //Todo : 본인것으로 변경해주세요 !
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <HeaderWhite title={"사용자인증"}></HeaderWhite>
      <button onClick={handleAuthBtnClick}>사용자 인증 받기</button>
    </div>
  );
};

export default AuthPage;
