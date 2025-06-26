import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();
  const Login = location.pathname !== '/login';
  return (
    <div className="mainWrap mainfont">
      <header>
        <Link to="/">
          <img
            className="logoImg"
            src={logo}
            alt="Netflix Logo img"></img>
        </Link>
        { Login && (
          <div className="lang">
            <select defaultValue="ko" name="lang-select">
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </select>
            <Link to="login">
              <button>로그인</button>
            </Link>
          </div>
          )
        }
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;