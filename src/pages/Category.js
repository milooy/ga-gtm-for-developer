import React from "react";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
import BOOK_LIST from "../utils/BOOK_LIST.json";

const Category = () => {
  let { categoryName } = useParams();
  const filteredBookList = BOOK_LIST.filter(
    book => book.category === categoryName
  );

  return (
    <div>
      <h2>카테고리: {categoryName}</h2>
      <section className="book-list">
        {filteredBookList.map(book => (
          <Book key={book.id} data={book} />
        ))}
      </section>
    </div>
  );
};

export default Category;
