import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Product from "../components/Product";
import all from "../assets/img/all.svg";
import item from "../assets/img/item.svg";
import category from "../assets/img/category.svg";
import event from "../assets/img/event.svg";
import brand from "../assets/img/brand.svg";

const SortByContainer = styled.div`
  width: 100vw;
  height: 16vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const SortBy = styled.div`
  width: 5.5rem;
  height: 5.5rem;

  border-radius: 100px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

const SortByImg = styled.img`
  width: 100%;
  height: 100%;
`;

const BookmarkConatiner = styled.div`
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const BookmarkPage = ({ bookmarks, addBookmark, showToast }) => {
  const [type, setType] = useState("all");

  const sortByHandler = (type) => {
    setType(type);
  };

  let sortByItems = bookmarks;

  if (type === "item") {
    sortByItems = sortByItems.filter((item) => {
      return item.type === "Product";
    });
  } else if (type === "category") {
    sortByItems = sortByItems.filter((item) => {
      return item.type === "Category";
    });
  } else if (type === "event") {
    sortByItems = sortByItems.filter((item) => {
      return item.type === "Exhibition";
    });
  } else if (type === "brand") {
    sortByItems = sortByItems.filter((item) => {
      return item.type === "Brand";
    });
  }

  return (
    <>
      <SortByContainer>
        <SortBy onClick={() => sortByHandler("all")}>
          <SortByImg src={all} />
          <div className="sortby-text">전체</div>
        </SortBy>
        <SortBy onClick={() => sortByHandler("item")}>
          <SortByImg src={item} />
          <div className="sortby-text">상품</div>
        </SortBy>
        <SortBy onClick={() => sortByHandler("category")}>
          <SortByImg src={category} />
          <div className="sortby-text">카테고리</div>
        </SortBy>
        <SortBy onClick={() => sortByHandler("event")}>
          <SortByImg src={event} />
          <div className="sortby-text">기획전</div>
        </SortBy>
        <SortBy onClick={() => sortByHandler("brand")}>
          <SortByImg src={brand} />
          <div className="sortby-text">브랜드</div>
        </SortBy>
      </SortByContainer>
      <BookmarkConatiner>
        {sortByItems &&
          sortByItems.map((item) => {
            return (
              <Product
                key={item.id}
                discount={item.discountPercentage}
                img={item.image_url}
                price={item.price}
                title={item.title}
                type={item.type}
                brandImg={item.brand_image_url}
                brandName={item.brand_name}
                follower={item.follower}
                subTitle={item.sub_title}
                addBookmark={addBookmark}
                productInfo={item}
                showToast={showToast}
              />
            );
          })}
      </BookmarkConatiner>
    </>
  );
};

export default BookmarkPage;
