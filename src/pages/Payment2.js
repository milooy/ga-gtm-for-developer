/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Book from "../components/Book";
import BookBlock from "../components/BookBlock";
import BOOK_LIST from "../utils/BOOK_LIST.json";
import { boxStyle, buttonStyle } from "../components/styles";
import { savePaymentMethodData } from "../store/payment";

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

const Payment2 = ({ onSavePaymentMethodData }) => {
  let history = useHistory();

  return (
    <div>
      <h2>결제 수단 선택</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSavePaymentMethodData({
            paymentMethod: e.target[0].value
          });
          history.push("/payment/step3");
        }}
      >
        <div css={boxStyle}>
          <input type="radio" name="payment-type" id="cash" value="cash" />
          <label htmlFor="cash">현금</label>
          <input
            type="radio"
            name="payment-type"
            id="card"
            value="card"
            required
          />
          <label htmlFor="card">카드</label>
          <input type="radio" name="payment-type" id="rock" value="rock" />
          <label htmlFor="rock">돌멩이</label>
        </div>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px"
          }}
        >
          <Link to="/payment/step1">이전</Link>
          <button css={buttonStyle} type="submit">
            결제하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect(
  state => ({
    selectedBookId: state.payment.selectedBookId
  }),
  {
    onSavePaymentMethodData: savePaymentMethodData
  }
)(Payment2);
