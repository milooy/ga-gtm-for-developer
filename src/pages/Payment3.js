import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BookBlock from "../components/BookBlock";
import BOOK_LIST from "../utils/BOOK_LIST.json";

const Payment3 = ({ selectedBookId, nickName, address, paymentMethod }) => {
  const book = BOOK_LIST.find(book => book.id === Number(selectedBookId));

  return (
    <div>
      <h2>결제가 성공하였습니다</h2>
      <BookBlock data={book} />
      <h2>상세 정보</h2>
      <div className="box">
        <p>
          <strong>닉네임</strong> {nickName}
        </p>
        <p>
          <strong>주소</strong> {address}
        </p>
        <p>
          <strong>결제수단</strong> {paymentMethod}
        </p>
      </div>
      <Link
        to="/"
        style={{
          float: "right",
          marginRight: "15px",
          textDecoration: "underline"
        }}
      >
        홈으로
      </Link>
    </div>
  );
};

export default connect(state => ({
  selectedBookId: state.payment.selectedBookId,
  nickName: state.payment.nickName,
  address: state.payment.address,
  paymentMethod: state.payment.paymentMethod
}))(Payment3);
