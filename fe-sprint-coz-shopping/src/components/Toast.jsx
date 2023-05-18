import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ToastContainer = styled.div`
  background-color: white;
  padding: 15px 40px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  font-weight: bold;
`;

const Toast = ({ message }) => {
  if (message === "상품이 북마크에 추가되었습니다.") {
    return (
      <ToastContainer>
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#ffd361", marginRight: "7px" }}
        />
        {message}
      </ToastContainer>
    );
  } else if (message === "상품이 북마크에서 제거되었습니다.") {
    return (
      <ToastContainer>
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#ededed", marginRight: "7px" }}
        />
        {message}
      </ToastContainer>
    );
  }
  // console.log(message);
  // return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;
