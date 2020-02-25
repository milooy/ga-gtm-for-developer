/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useParams } from "react-router-dom";

import DailyBook from "../components/DailyBook";
import BOOK_LIST from "../utils/BOOK_LIST.json";

const buttonStyle = css`
  background: #ff5d2c;
  padding: 10px;
  margin: 10px 10px 0 0;
  display: inline-block;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  min-width: 90px;
  text-align: center;
`;

const BookDetail = () => {
  let { bookId } = useParams();
  const book = BOOK_LIST.find(book => book.id === Number(bookId));
  console.log({ bookId, book });

  if (!book) {
    return <h1>책을 찾을 수 없습니다</h1>;
  }

  const extraButtons = (
    <div>
      <a href={book.originalLink} css={buttonStyle}>
        바로구매
      </a>
      <a
        href={book.originalLink}
        css={css`
          ${buttonStyle};
          background: #F9A9C9;
        `}
      >
        외부구매
      </a>
    </div>
  );

  return (
    <div>
      <DailyBook
        key={book.id}
        id={book.id}
        title={book.title}
        price={book.price}
        imgSrc={book.imgSrc}
        writer={book.writer}
        publisher={book.publisher}
        extraButtons={extraButtons}
      />
      <h2>책 소개</h2>
      {book.detailImgSrc ? (
        <img src={book.detailImgSrc} alt="책 소개" css={{ width: "100% " }} />
      ) : (
        "준비중"
      )}
    </div>
  );
};

export default BookDetail;
