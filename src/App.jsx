import React from "react";

const onClickButton = () => alert();
const contentsStyle = {
  color: "red",
  fontSize: "50px"
};

const App = () => {
  return (
    <>
      <h1 style={contentsStyle}>こんちゃ</h1>
      <p>aaa</p>
      <button onClick={onClickButton}>スイッチ</button>
    </>
  );
};

export default App;
