import React from "react";
import styled from "styled-components";

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

const Footer = ({ label, copyright }) => {
  return (
    <FooterContainer>
      <div>{label}</div>
      <div>{copyright}</div>
    </FooterContainer>
  );
};

export default Footer;
