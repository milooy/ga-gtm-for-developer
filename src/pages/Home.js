/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Book from "../components/Book";
import BookBlock from "../components/BookBlock";
import BOOK_LIST from "../utils/BOOK_LIST.json";

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

const Home = () => {
  const randomBook = BOOK_LIST[Math.floor(Math.random() * BOOK_LIST.length)];

  return (
    <div>
      <h2>오늘의 책</h2>
      <BookBlock
        key={randomBook.id}
        data={randomBook}
      />
      <h2>책 목록</h2>
      <section
        css={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {BOOK_LIST.map(book => (
          <Book
            key={book.id}
            data={book}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
