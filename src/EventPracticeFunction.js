import React, { useState } from "react";

const EventPracticeFunction = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="사용자명"
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        value={message}
        placeholder="메세지"
        onChange={onChange}
      />
      <button onClick={onClick}>버튼</button>
    </div>
  );
};

export default EventPracticeFunction;
