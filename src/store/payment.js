const START_PAYMENT_STEP = "START_PAYMENT_STEP";
const SAVE_RECEIVER_DATA = "SAVE_RECEIVER_DATA";

export const startPaymentStep = bookId => ({ type: START_PAYMENT_STEP, bookId });

export const saveReceiverData = ({nickName, address}) => ({ type: SAVE_RECEIVER_DATA, nickName, address });

const initialState = {
  // selectedBookId: null,
  selectedBookId: 2,
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case START_PAYMENT_STEP:
      return {
        ...state,
        selectedBookId: action.bookId,
      };
    case SAVE_RECEIVER_DATA:
      return {
        ...state,
        nickName: action.nickName,
        address: action.address,
      };
    default:
      return state;
  }
}