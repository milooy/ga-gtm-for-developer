/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Book from "../components/Book";
import BookBlock from "../components/BookBlock";
import BOOK_LIST from "../utils/BOOK_LIST.json";
import { boxStyle, buttonStyle } from "../components/styles";

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

const Payment3 = ({selectedBookId, nickName, address, paymentMethod}) => {
  let history = useHistory();
  const book = BOOK_LIST.find(book => book.id === Number(selectedBookId));

  return (
    <div>
      <h2>결제가 성공하였습니다</h2>
      <BookBlock data={book} />
      <h2>상세 정보</h2>
      <div css={boxStyle}>
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
      <Link to="/">홈으로</Link>
    </div>
  );
};

export default connect(
  state => ({
    selectedBookId: state.payment.selectedBookId,
    nickName: state.payment.nickName,
    address: state.payment.address,
    paymentMethod: state.payment.paymentMethod,
  })
)(Payment3);
