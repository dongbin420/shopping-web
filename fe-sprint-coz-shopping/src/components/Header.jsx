import styled from "styled-components";
import logo from "../../img/로고.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

import React from "react";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 9%;
  position: sticky;
  /* border-bottom: 1px solid gray; */
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: center;
  width: 50%;
  margin-left: 10%;
`;

export const HeaderImg = styled.img`
  cursor: pointer;
`;

export const HeaderLeftText = styled.p`
  margin-left: 2%;
  font-size: 1.5em;
  font-weight: 700;
`;

export const HeaderRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  cursor: pointer;
  position: relative;
  margin: 5px;
`;

export const HamburgerEle = styled.div`
  /* display: block;
  position: absolute; */
  height: 3px;
  width: 35px;
  background-color: #000;
  margin-bottom: 8px;
`;

export const Bubble = styled.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  /* padding: 30px; */
  top: 70px;
  right: 1%;
  border-radius: 10px;
  width: 200px;
  height: 120%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BubbleText = styled.div`
  margin-left: 5px;
`;
const Header = ({ isBubbleOpen, handleOpenBubble, handleCloseBubble }) => {
  //   const [isBubbleOpen, setIsBubbleOpen] = useState(false);

  //   const handleOpenBubble = () => {
  //     setIsBubbleOpen(true);
  //   };

  //   const handleCloseBubble = () => {
  //     setIsBubbleOpen(false);
  //   };

  return (
    <HeaderContainer onClick={handleCloseBubble}>
      <HeaderLeft>
        <Link to="/">
          <HeaderImg src={logo}></HeaderImg>
        </Link>
        <HeaderLeftText>COZ Shopping</HeaderLeftText>
      </HeaderLeft>
      <HeaderRight>
        <Hamburger onClick={handleOpenBubble} className="hamburger">
          <HamburgerEle></HamburgerEle>
          <HamburgerEle></HamburgerEle>
          <HamburgerEle></HamburgerEle>
        </Hamburger>
        {isBubbleOpen && (
          <Bubble className="bubble">
            <BubbleText className="bubble-text1">OOO님, 안녕하세요!</BubbleText>
            <Link to="/product/list">
              <BubbleText onClick={handleCloseBubble} className="bubble-text2">
                상품리스트 페이지
              </BubbleText>
            </Link>
            <Link to="/bookmark">
              <BubbleText onClick={handleCloseBubble} className="bubble-text3">
                북마크 페이지
              </BubbleText>
            </Link>
          </Bubble>
        )}
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
