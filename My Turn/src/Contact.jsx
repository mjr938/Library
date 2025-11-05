
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body text-center">
          <h2 className="text-success mb-3 fw-bold">تماس با ما</h2>
          <p className="lead text-muted">call me</p>

          <hr />

          <div className="mt-3">
            <p className="mb-1">
              <strong>📞 تلفن:</strong> +98 912 123 4567
            </p>
            <p className="mb-1">
              <strong>✉️ ایمیل:</strong> contact@library.com
            </p>
            <p>
              <strong>📍 آدرس:</strong> تهران، خیابان آزادی، پلاک ۱۲۳
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
