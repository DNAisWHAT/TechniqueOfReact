import { Component } from "react";
import React from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={(e) => {
            console.log(e.target.value);
            this.setState({ message: e.target.value });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: "" });
          }}
        >
          초기화
        </button>
        {/* <h1>{this.state.message}</h1> */}
      </div>
    );
  }
}

export default EventPractice;
