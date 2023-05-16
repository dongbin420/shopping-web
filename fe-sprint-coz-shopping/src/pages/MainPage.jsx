import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "../components/Product";

export const ProductListContainer = styled.div`
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const ProductListText = styled.div`
  margin-top: 1.5rem;
  margin-left: 6rem;
  font-weight: bold;
  font-size: 1.5em;
`;

export const ProductList = styled.div`
  /* flex-grow: 1; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1450px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const BookmarkListContainer = styled.div`
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
`;

export const BookmarkListText = styled.div`
  margin-top: 1.5rem;
  margin-left: 8rem;
  font-weight: bold;
  font-size: 1.5em;
`;

export const BookmarkList = styled.div`
  flex-grow: 1;
`;

const MainPage = () => {
  const [ProductInfo, setProductInfo] = useState(null);

  const getProducts = () => {
    return axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((res) => {
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(ProductInfo);

  return (
    <>
      <ProductListContainer>
        <ProductListText>상품 리스트</ProductListText>
        <ProductList>
          {ProductInfo &&
            ProductInfo.map((ele) => {
              return (
                <Product
                  key={ele.id}
                  discount={ele.discountPercentage}
                  img={ele.image_url}
                  price={ele.price}
                  title={ele.title}
                  type={ele.type}
                  brandImg={ele.brand_image_url}
                  brandName={ele.brand_name}
                  follower={ele.follower}
                  subTitle={ele.sub_title}
                />
              );
            })}
        </ProductList>
      </ProductListContainer>
      <BookmarkListContainer>
        <BookmarkListText>북마크 리스트</BookmarkListText>
        <BookmarkList></BookmarkList>
      </BookmarkListContainer>
    </>
  );
};

export default MainPage;
