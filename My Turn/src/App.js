// src/App.js
import React from "react";
import { Link, Outlet } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container py-5">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm rounded-4 mb-4 px-3">
        <div className="container-fluid justify-content-center">
          <Link to="/about" className="btn btn-outline-primary mx-2">
            صفحه درباره ما
          </Link>
          <Link to="/contact" className="btn btn-outline-success mx-2">
            صفحه تماس با ما
          </Link>
          <Link to="/books" className="btn btn-outline-secondary mx-2">
            لیست کتاب‌ها
          </Link>
        </div>
      </nav>

      <hr className="my-4" />

      
      <div className="bg-white p-4 rounded-4 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
