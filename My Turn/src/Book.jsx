
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "./bookList";
import "bootstrap/dist/css/bootstrap.min.css";

const Books = () => {
  const books = getBooks();

  return (
    <div className="container py-5">
      <div className="row">
        
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-primary text-white text-center fw-bold">
              لیست کتاب‌ها
            </div>
            <ul className="list-group list-group-flush">
              {books.map((book) => (
                <Link
                  key={book.id}
                  to={book.id}
                  className="list-group-item list-group-item-action"
                >
                  {book.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="col-md-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
