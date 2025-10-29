import { Link, Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <Link to="/about" className="p-4">
        صفحه درباره ما
      </Link>
      <Link to="/contact" className="p-4">
        صفحه تماس با ما
      </Link>
      <Link to="/books" className="p-4">
        لیست کتاب ها
      </Link>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
