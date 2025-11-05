// src/NotFound.jsx
import React from "react";
import { Link } from "react-router";
import no from "./assets/404.png";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => {
  return (
    <div className="container text-center py-5">
      <div className="card border-0 shadow-lg rounded-4">
        <div className="card-body">
          <img
            src={no}
            alt="صفحه پیدا نشد"
            className="img-fluid rounded-3 mb-4"
            style={{ maxWidth: "600px" }}
          />
          <h2 className="text-danger fw-bold mb-3">صفحه مورد نظر یافت نشد!</h2>
          <p className="text-muted mb-4">ممکن است آدرس اشتباه باشد یا صفحه حذف شده باشد.</p>

          <Link to="/" className="btn btn-primary px-4 py-2 rounded-pill">
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
