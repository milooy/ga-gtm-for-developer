/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
import BOOK_LIST from "../utils/BOOK_LIST.json";

const Category = () => {
  let { categoryName } = useParams();
  const filteredBookList = BOOK_LIST.filter(book => book.category === categoryName);

  return (
    <div>
      <h2>카테고리: {categoryName}</h2>
      <section
        css={{
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {filteredBookList.map(book => (
          <Book key={book.id} data={book} />
        ))}
      </section>
    </div>
  );
};

export default Category;
