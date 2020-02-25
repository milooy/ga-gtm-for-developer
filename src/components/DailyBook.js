/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const bookStyle = css`
  background: white;
  margin: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px;

  a {
    display: flex;
  }
`;

const bookImageStyle = css`
  img {
    width: 30%;
  }
`;

const DailyBook = ({ id, title, price, imgSrc, writer, publisher }) => {
  return (
    <article css={bookStyle}>
      <Link to={`/book/${id}`} css={{ textDecoration: "none", color: "black" }}>
        <img src={imgSrc} alt={`${title} 표지`} css={{ width: "20%" }} />
        <div
          css={{
            margin: "10px 15px"
          }}
        >
          <h3 css={{ margin: 0, fontSize: "25px" }}>{title}</h3>
          <div>
            {`${writer} 저 | ${publisher} | ${price}원`}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default DailyBook;
