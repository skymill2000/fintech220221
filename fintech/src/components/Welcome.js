const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      안녕하세요 {props.age}세 {props.username} 님 반갑습니다!
    </div>
  );
};

export default Welcome;
