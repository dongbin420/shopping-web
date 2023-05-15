import styled from "styled-components";

import React from "react";

export const FooterContainer = styled.div`
  max-width: 100%;
  height: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 0.5px solid lightgray;
  color: lightgray;
  font-size: 0.75em;
  font-weight: 300;
  overflow: hidden;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>개인정보 처리방침 | 이용 약관</div>
      <div>All rights reserved @ Codestates</div>
    </FooterContainer>
  );
};

export default Footer;
