/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";

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
    margin-left: 15px;
  }
`;

const Navigation = () => {
  return (
    <nav
      css={{
        display: "flex",
        padding: "10px",
        alignItems: "center",
        borderBottom: "1px solid black"
      }}
    >
      <Link to="/" css={logoStyle}>
        DEVBOOKS
      </Link>
      <ul css={menuStyle}>
        <li>
          <Link to="/category/프로그래밍언어">프로그래밍언어</Link>
        </li>
        <li>
          <Link to="/category/빅데이터">빅데이터</Link>
        </li>
        <li>
          <Link to="/category/웹사이트">웹사이트</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
