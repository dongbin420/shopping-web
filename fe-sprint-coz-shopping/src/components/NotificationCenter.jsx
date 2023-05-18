import Toast from "./Toast";
import styled from "styled-components";
import { useState } from "react";

import React from "react";

const NotificationContainer = styled.div`
  font-size: 1.1rem;
  position: fixed;
  z-index: 999999;
  bottom: 10px;
  right: 12px;
`;

const NotificationCenter = ({ toasts }) => {
  return (
    <NotificationContainer>
      {toasts.map((toast, index) => (
        <Toast key={index} message={toast} />
      ))}
    </NotificationContainer>
  );
};

export default NotificationCenter;
