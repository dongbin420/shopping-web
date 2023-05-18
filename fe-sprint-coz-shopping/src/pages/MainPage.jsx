import styled from "styled-components";

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
  margin-left: 30px;
`;

export const BookmarkListText = styled.div`
  margin-top: 1.5rem;
  margin-left: 6rem;
  font-weight: bold;
  font-size: 1.5em;
`;

export const BookmarkList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 1450px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const MainPage = ({
  productInfo,
  addBookmark,
  filteredBookmarks,
  showToast,
}) => {
  return (
    <>
      <ProductListContainer>
        <ProductListText>상품 리스트</ProductListText>
        <ProductList>
          {productInfo &&
            productInfo.map((ele) => {
              let updatedProductInfo = ele;
              if (ele.isBookmarked === undefined) {
                updatedProductInfo = { ...ele, isBookmarked: false };
              }

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
                  addBookmark={addBookmark}
                  productInfo={updatedProductInfo}
                  showToast={showToast}
                />
              );
            })}
        </ProductList>
      </ProductListContainer>
      <BookmarkListContainer>
        <BookmarkListText>북마크 리스트</BookmarkListText>
        <BookmarkList>
          {filteredBookmarks &&
            filteredBookmarks.map((filtered) => {
              return (
                <Product
                  key={filtered.id}
                  discount={filtered.discountPercentage}
                  img={filtered.image_url}
                  price={filtered.price}
                  title={filtered.title}
                  type={filtered.type}
                  brandImg={filtered.brand_image_url}
                  brandName={filtered.brand_name}
                  follower={filtered.follower}
                  subTitle={filtered.sub_title}
                  addBookmark={addBookmark}
                  productInfo={filtered}
                  showToast={showToast}
                />
              );
            })}
        </BookmarkList>
      </BookmarkListContainer>
    </>
  );
};

export default MainPage;
