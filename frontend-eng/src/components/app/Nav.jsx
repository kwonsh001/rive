import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import "../../css/nav.css";

const Nav = () => {
  const { auth, setAuth } = useContext(AuthContext);

  // 서비스 추가
  const [service, setService] = useState("Global"); // 기본값은 'global'
  const handleServiceChange = (service) => {
    setService(service);
    if (service === "korea") {
      window.location.href = "https://crider.mangooopeach.store"; // 한국 서비스 도메인으로 리디렉션
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top navihi">
      <div className="container">
        <div className="navbar-collapse collapse justify-content-between" id="navbar-content">
          <ul className="navbar-nav mr-auto">
            {/* 메인 화면 */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>

            {/* 게시판 */}
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Board
              </div>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/bbslist">
                  글목록
                </Link>
                <Link className="dropdown-item" to="/bbswrite">
                  글추가
                </Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {auth ? (
              <>
                {/* 회원 정보 */}
                <li className="nav-item">
                  <span className="nav-link">
                    {" "}
                    {auth} 님 반갑습니다 <i className="fab fa-ello"></i> &nbsp;{" "}
                  </span>
                </li>

                {/* 로그아웃 */}
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    <i className="fas fa-sign-out-alt"></i> 로그아웃
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* 로그인 */}
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    login
                  </Link>
                </li>

                {/* 회원가입 */}
                <li className="nav-item">
                  <Link className="nav-link" to="/join">
                    sign in
                  </Link>
                </li>
              </>
            )}
            {/* 서비스 선택 */}
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="serviceDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {service === "korea" ? (
                  <span>
                    <img src="/images/korea.png" alt="Korea" className="service-img" />
                    Korea
                  </span>
                ) : (
                  <span>
                    <img src="/images/global.png" alt="Global" className="service-img" />
                    Global
                  </span>
                )}
              </div>

              <div className="dropdown-menu" aria-labelledby="serviceDropdown">
                {/* `service`가 'korea'일 때 Global만 표시 */}

                <button className="dropdown-item" onClick={() => handleServiceChange("korea")}>
                  <img src="/images/korea.png" alt="Korea" className="dropdown-item-img" />
                  Korea
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
