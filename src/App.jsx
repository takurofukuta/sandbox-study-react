import React from "react";
import ColorfulMessages from "./components/ColorfulMessages";

const onClickButton = () => alert();

const App = () => {
  return (
    <>
      <ColorfulMessages color="blue" message="お元気ですか" />
      <ColorfulMessages color="pink" message="元気です!" />
      <button onClick={onClickButton}>スイッチ</button>
    </>
  );
};

export default App;
