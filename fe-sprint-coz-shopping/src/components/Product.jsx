import React from "react";
import styled from "styled-components";

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
`;

const ProductTextWrapper = styled.div`
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
  console.log(props.img);
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
    <ProductContainer>
      <ProductImg src={img}></ProductImg>
      <ProductTextWrapper>
        <ProductText1>{title}</ProductText1>
        <ProductText2 style={{ fontWeight: "bold" }}>관심고객수</ProductText2>
      </ProductTextWrapper>
      <ProductTextWrapper>
        <ProductText3>{subTitle}</ProductText3>
        <ProductText4>{follower}</ProductText4>
      </ProductTextWrapper>
    </ProductContainer>
  ) : (
    <ProductContainer>
      <ProductImg src={img}></ProductImg>
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
  );
};

export default Product;
