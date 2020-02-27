/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

const bookStyle = css`
  background: white;
  width: 230px;
  margin: 15px;
  flex-grow: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

const bookImageStyle = css`
  min-height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }
`;

const Book = ({ data }) => {
  return (
    <article css={bookStyle}>
      <Link to={`/book/${data.id}`} css={{ textDecoration: "none", color: "black" }}>
        <div css={bookImageStyle}>
          <img src={data.imgSrc} alt={`${data.title} 표지`} />
        </div>
        <div
          css={{
            margin: "10px 15px"
          }}
        >
          <h3 css={{ margin: 0 }}>{data.title}</h3>
          <div>
            {`${data.writer} 저 | ${data.publisher} | ${data.price}원`}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Book;
