/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import { boxStyle } from "./styles"

const BookBlock = ({
  data,
  extraButtons
}) => {
  const content = (
    <div css={{ display: "flex" }}>
      <img src={data.imgSrc} alt={`${data.title} 표지`} css={{ width: "20%" }} />
      <div
        css={{
          margin: "10px 15px"
        }}
      >
        <h3 css={{ margin: 0, fontSize: "25px" }}>{data.title}</h3>
        <div>{`${data.writer} 저 | ${data.publisher} | ${data.price}원`}</div>
        {extraButtons}
      </div>
    </div>
  );
  return (
    <article css={boxStyle}>
      {extraButtons ? (
        content
      ) : (
        <Link
          to={`/book/${data.id}`}
          css={{ textDecoration: "none", color: "black" }}
        >
          {content}
        </Link>
      )}
    </article>
  );
};

export default BookBlock;
