import React, { useState } from "react";
import ColorfulMessages from "./components/ColorfulMessages";

const App = () => {
  const [num, setNum] = useState(0);
  const [face, setFace] = useState(true);

  const onClickButtonCountUp = () => {
    setNum(num + 1);
  };
  const onClickButtonFace = () => {
    setFace(!face);
  };

  return (
    <>
      <ColorfulMessages color="blue" message="お元気ですか" />
      <ColorfulMessages color="pink" message="元気です!" />
      <button onClick={onClickButtonCountUp}>カウントアップ</button>
      <button onClick={onClickButtonFace}>on/off</button>
      <p>{num}</p>
      {face && <p> ( ^ω^ ) </p>}
    </>
  );
};

export default App;
