import { Link, Outlet } from "react-router-dom";
import { getBooks } from "./bookList";

const Books = () => {
  let books = getBooks();

  return (
    <div className="row">
      <ul className="col-4 list-group">
        {books.map((book) => (
          <Link className="list-group-item" to={book.id} key={book.id}>
            {book.name}
          </Link>
        ))}
      </ul>
      <div className="col-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Books;
