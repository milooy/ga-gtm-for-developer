import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";

import BookBlock from "../components/BookBlock";
import BOOK_LIST from "../utils/BOOK_LIST.json";
import { startPaymentStep } from "../store/payment";

const BookDetail = ({ onStartPaymentStep }) => {
  let { bookId } = useParams();
  const book = BOOK_LIST.find(book => book.id === Number(bookId));

  if (!book) {
    return <h1>책을 찾을 수 없습니다</h1>;
  }

  const extraButtons = (
    <div>
      <Link
        to="/payment/step1"
        className="button"
        onClick={() => onStartPaymentStep(book.id)}
      >
        바로구매
      </Link>
      <a
        href={book.originalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="button"
        style={{ background: "#f9a9c9" }}
      >
        외부구매
      </a>
    </div>
  );

  return (
    <div>
      <BookBlock key={book.id} data={book} extraButtons={extraButtons} />
      <h2>책 소개</h2>
      {book.detailImgSrc ? (
        <img src={book.detailImgSrc} alt="책 소개" style={{ width: "100%", maxWidth: "500px" }} />
      ) : (
        "준비중"
      )}
    </div>
  );
};

export default connect(null, {
  onStartPaymentStep: startPaymentStep
})(BookDetail);
