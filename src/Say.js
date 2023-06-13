import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const setRed = () => setColor("Red");
  const setBlue = () => setColor("Blue");
  const setGreen = () => setColor("Green");

  return (
    <div>
      <h1 style={{ color: color }}>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <div>
        <button onClick={setRed}>빨강 색 설정</button>
        <button onClick={setBlue}>파란 색 설정</button>
        <button onClick={setGreen}>초록 색 설정</button>
      </div>
    </div>
  );
};

export default Say;
