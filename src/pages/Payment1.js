/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import BookBlock from "../components/BookBlock";
import BOOK_LIST from "../utils/BOOK_LIST.json";
import { connect } from "react-redux";
import { saveReceiverData } from "../store/payment";
import { boxStyle, buttonStyle } from "../components/styles";

const formStyle = css`
  div {
    padding: 10px;
  }
  label {
    display: block;
  }

  input {
    min-width: 200px;
    font-size: 24px;
  }

  textarea {
    width: 100%;
    border: 1px solid #d4d4d4;
    min-height: 70px;
    font-size: 24px;
  }
`;

const Payment1 = ({ selectedBookId, onSaveReceiverData }) => {
  const book = BOOK_LIST.find(book => book.id === Number(selectedBookId));

  return (
    <div>
      <h1>결제 Step1</h1>
      <h2>제품 확인</h2>
      <BookBlock data={book} />
      <h2>배송지 입력</h2>
      <form
        css={formStyle}
        onSubmit={e => {
          e.preventDefault();
          onSaveReceiverData({
            nickName: e.target[0].value,
            address: e.target[1].value
          });
        }}
      >
        <div css={[boxStyle, formStyle]}>
          <div>
            <label for="">받는이</label>
            <input type="text" name="nickname" />
          </div>
          <div>
            <label for="">주소</label>
            <textarea name="address" />
          </div>
        </div>
        <div css={{ textAlign: "right" }}>
          <button css={buttonStyle} type="submit">
            다음
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
    onSaveReceiverData: saveReceiverData
  }
)(Payment1);
