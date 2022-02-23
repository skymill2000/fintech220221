import styled from "styled-components";

const WelecomBlock = styled.div`
  margin: 20px;
`;

const Welcome = (props) => {
  console.log(props);
  return (
    <WelecomBlock>
      안녕하세요 {props.age}세 {props.username} 님 반갑습니다!
    </WelecomBlock>
  );
};

export default Welcome;
