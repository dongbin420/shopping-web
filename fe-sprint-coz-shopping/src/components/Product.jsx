import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const ProductContainer = styled.div`
  /* display: inline-block; */
  width: 350px;
  height: 350px;
`;

// export const ImgContainer = styled.div``;

export const ProductImg = styled.img`
  width: 350px;
  height: 250px;
  border-radius: 30px;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25); */
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 10px;
  margin-bottom: 150px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const BookmarkButton = styled.button``;

export const ProductTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const ProductText1 = styled.div`
  font-weight: bold;
`;

export const ProductText2 = styled.div``;

export const ProductText3 = styled.div``;

export const ProductText4 = styled.div``;

const Product = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let img = null;
  let title = null;
  let discount = null;
  let follower = null;
  let price = null;
  let subTitle = null;

  if (props.type === "Brand") {
    img = props.brandImg;
    title = props.brandName;
    follower = props.follower;
  } else if (props.type === "Product") {
    discount = props.discount;
    img = props.img;
    price = props.price;
    title = props.title;
  } else if (props.type === "Exhibition") {
    img = props.img;
    subTitle = props.subTitle;
    title = props.title;
  } else if (props.type === "Category") {
    img = props.img;
    title = props.title;
  }

  const isBrandType = props.type === "Brand";
  const isCategory = props.type === "Category";

  return isBrandType ? (
    <>
      <ProductContainer>
        <ProductImg onClick={openModal} src={img}></ProductImg>

        <FontAwesomeIcon className="bookmark-btn" icon={faStar} />

        <ProductTextWrapper>
          <ProductText1>{title}</ProductText1>
          <ProductText2 style={{ fontWeight: "bold" }}>관심고객수</ProductText2>
        </ProductTextWrapper>
        <ProductTextWrapper>
          <ProductText3>{subTitle}</ProductText3>
          <ProductText4>{follower}</ProductText4>
        </ProductTextWrapper>
      </ProductContainer>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ProductImg
              src={img}
              style={{ cursor: "auto", width: "450px", height: "350px" }}
            />
            <CloseButton onClick={closeModal}></CloseButton>
            <FontAwesomeIcon className="bookmark-btn-modal" icon={faStar} />
          </ModalContent>
        </Modal>
      )}
    </>
  ) : (
    <>
      <ProductContainer>
        <ProductImg onClick={openModal} src={img}></ProductImg>
        <FontAwesomeIcon className="bookmark-btn" icon={faStar} />
        <ProductTextWrapper>
          <ProductText1>{isCategory ? "#" + title : title}</ProductText1>
          <ProductText2 style={{ color: "#452cdd", fontWeight: "bold" }}>
            {discount ? discount + "%" : discount}
          </ProductText2>
        </ProductTextWrapper>
        <ProductTextWrapper>
          <ProductText3>{subTitle}</ProductText3>
          <ProductText4>
            {price ? Number(price).toLocaleString() + "원" : price}
          </ProductText4>
        </ProductTextWrapper>
      </ProductContainer>
      {isModalOpen && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ProductImg
              src={img}
              style={{ cursor: "auto", width: "450px", height: "350px" }}
            />

            <CloseButton onClick={closeModal}></CloseButton>
            <FontAwesomeIcon className="bookmark-btn-modal" icon={faStar} />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Product;
