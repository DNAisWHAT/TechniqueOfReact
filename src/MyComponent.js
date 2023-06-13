import React from "react";
import { ReactPropTypes } from "react";
const MyComponent = ({ name, children }) => {
  //   const { name, children } = props;
  return (
    <div>
      나의 새롭고 멋진 컴포넌트 {name}. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "리액트",
};

export default MyComponent;
