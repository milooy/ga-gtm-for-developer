/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const logoStyle = css`
  font-weight: bold;
  font-size: 25px;
`

const menuStyle = css`
  list-style: none;
  display: flex;
  margin: 0;
  padding-left: 0;

  li {
    margin-left: 10px;
  }
`;

const Navigation = () => {
  return (
    <nav
      css={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        borderBottom: "1px solid black",
      }}
    >
      <div css={logoStyle}>DEVBOOKS</div>
      <ul css={menuStyle}>
        <li>프로그래밍 언어</li>
        <li>클라우드/빅데이터</li>
        <li>웹사이트</li>
      </ul>
    </nav>
  );
};

export default Navigation;
