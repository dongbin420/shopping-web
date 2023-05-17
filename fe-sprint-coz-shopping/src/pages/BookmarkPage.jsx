import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import all from "../assets/img/all.svg";
import item from "../assets/img/item.svg";
import category from "../assets/img/category.svg";
import event from "../assets/img/event.svg";
import brand from "../assets/img/brand.svg";

const BookmarkPage = ({ bookmarks, addBookmark }) => {
  console.log(bookmarks);

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

  return (
    <>
      <SortByContainer>
        <SortBy>
          <SortByImg src={all} />
          <div className="sortby-text">전체</div>
        </SortBy>
        <SortBy>
          <SortByImg src={item} />
          <div className="sortby-text">상품</div>
        </SortBy>
        <SortBy>
          <SortByImg src={category} />
          <div className="sortby-text">카테고리</div>
        </SortBy>
        <SortBy>
          <SortByImg src={event} />
          <div className="sortby-text">기획전</div>
        </SortBy>
        <SortBy>
          <SortByImg src={brand} />
          <div className="sortby-text">브랜드</div>
        </SortBy>
      </SortByContainer>
      <BookmarkConatiner>
        {bookmarks &&
          bookmarks.map((bookmark) => {
            return (
              <Product
                key={bookmark.id}
                discount={bookmark.discountPercentage}
                img={bookmark.image_url}
                price={bookmark.price}
                title={bookmark.title}
                type={bookmark.type}
                brandImg={bookmark.brand_image_url}
                brandName={bookmark.brand_name}
                follower={bookmark.follower}
                subTitle={bookmark.sub_title}
                addBookmark={addBookmark}
                productInfo={bookmark}
              />
            );
          })}
      </BookmarkConatiner>
    </>
  );
};

export default BookmarkPage;
