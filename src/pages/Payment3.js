/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Book from "../components/Book";
import BookBlock from "../components/BookBlock";
import BOOK_LIST from "../utils/BOOK_LIST.json";

const logoStyle = css`
  font-weight: bold;
  font-size: 25px;
`;

const menuStyle = css`
  list-style: none;
  display: flex;
  margin: 0;
  padding-left: 0;

  li {
    margin-left: 10px;
  }
`;

const Payment3 = () => {
  return (
    <div>
      <h2>제품 확인</h2>
      <h2>배송지 입력</h2>
    </div>
  );
};

export default Payment3;
