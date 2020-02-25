/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Book from "../components/Book";
import DailyBook from "../components/DailyBook";
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
      <DailyBook
        key={randomBook.id}
        id={randomBook.id}
        title={randomBook.title}
        price={randomBook.price}
        imgSrc={randomBook.imgSrc}
        writer={randomBook.writer}
        publisher={randomBook.publisher}
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
            id={book.id}
            title={book.title}
            price={book.price}
            imgSrc={book.imgSrc}
            writer={book.writer}
            publisher={book.publisher}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
