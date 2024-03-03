import React, { useEffect } from "react";
import "./sidebar.css";

const Sidebar = () => {
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");

    function menuBtnChange() {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the icons class
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the icons class
      }
    }

    closeBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      menuBtnChange(); //calling the function(optional)
    });

    // Cleanup the event listener on component unmount
    return () => {
      closeBtn.removeEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange();
      });
    };
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          <section className="nav-categores">
            <li>
              <a href="./home.html">
                <i className="bx bx-home"></i>
                <span className="links_name">Home</span>
              </a>
              <span className="tooltip">Home</span>
            </li>
            <li>
              <a href="../erro/manutenção.html">
                <i className="bx bx-search"></i>
                <span className="links_name">Search</span>
              </a>
              <span className="tooltip">Search</span>
            </li>
          </section>
          <hr className="nav_hr" />
          <section className="nav-categores">
            <li>
              <a href="../erro/comingSoon.html">
                <i className="bx bx-heart"></i>
                <span className="links_name">Salvos</span>
              </a>
              <span className="tooltip">Salvos</span>
            </li>
            <li>
              <a href="../erro/comingSoon.html">
                <i className="bx bx-plus"></i>
                <span className="links_name">Criar</span>
              </a>
              <span className="tooltip">Criar</span>
            </li>
          </section>
          <hr className="nav_hr" />
          <section className="nav-categore">
            <ul id="allPlaylists"></ul>
          </section>
          <section className="nav-categores">
            <li className="exit">
              <a href="../index.html">
                <i className="bx bx-exit"></i>
                <span className="links_name">Sair</span>
              </a>
              <span className="tooltip">Sair</span>
            </li>
          </section>
        </ul>
      </div>

      <div className="menu-min-width">
        <div className="menu-categore">
          <a href="./home.html">
            <i className="bx bx-home"></i>
          </a>
          <h5>Home</h5>
        </div>
        <div className="menu-categore">
          <a href="#">
            <i className="bx bx-search"></i>
          </a>
          <h5>Search</h5>
        </div>
        <div className="menu-categore">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M0.590515 8.3037L11.185 14.425C11.364 14.5283 11.567 14.5827 11.7736 14.5827C11.9802 14.5827 12.1832 14.5283 12.3622 14.425L22.9567 8.3037C23.1346 8.20098 23.2825 8.0535 23.3858 7.8759C23.489 7.6983 23.544 7.49677 23.5452 7.29134C23.5461 7.08391 23.4921 6.87994 23.3887 6.7001C23.2854 6.52025 23.1363 6.37091 22.9567 6.2672L12.3622 0.15771C12.1832 0.0543925 11.9802 0 11.7736 0C11.567 0 11.364 0.0543925 11.185 0.15771L0.590515 6.2672C0.410874 6.37091 0.261828 6.52025 0.158469 6.7001C0.0551102 6.87994 0.00110833 7.08391 0.00193184 7.29134C0.00317183 7.49677 0.058152 7.6983 0.161408 7.8759C0.264664 8.0535 0.4126 8.20098 0.590515 8.3037ZM11.7736 2.58267L20.0138 7.29134L11.7736 12L3.53343 7.29134L11.7736 2.58267ZM21.7795 11.023L11.7736 16.7087L1.76768 10.9759C1.63333 10.898 1.4849 10.8475 1.33095 10.8273C1.17701 10.8071 1.02058 10.8175 0.870676 10.858C0.720775 10.8985 0.580365 10.9682 0.457531 11.0632C0.334698 11.1582 0.231868 11.2765 0.154964 11.4114C0.00149349 11.6817 -0.0388436 12.0017 0.0427539 12.3017C0.124351 12.6016 0.32126 12.8571 0.590515 13.0124L11.185 19.1336C11.364 19.2369 11.567 19.2913 11.7736 19.2913C11.9802 19.2913 12.1832 19.2369 12.3622 19.1336L22.9567 13.0124C23.2259 12.8571 23.4228 12.6016 23.5044 12.3017C23.586 12.0017 23.5457 11.6817 23.3922 11.4114C23.3153 11.2765 23.2125 11.1582 23.0896 11.0632C22.9668 10.9682 22.8264 10.8985 22.6765 10.858C22.5266 10.8175 22.3702 10.8071 22.2162 10.8273C22.0623 10.8475 21.9139 10.898 21.7795 10.9759V11.023ZM21.7795 15.7316L11.7736 21.4173L1.76768 15.6845C1.63333 15.6067 1.4849 15.5562 1.33095 15.536C1.17701 15.5158 1.02058 15.5262 0.870676 15.5667C0.720775 15.6072 0.580365 15.6769 0.457531 15.7719C0.334698 15.8668 0.231868 15.9852 0.154964 16.1201C0.00149349 16.3904 -0.0388436 16.7104 0.0427539 17.0103C0.124351 17.3103 0.32126 17.5657 0.590515 17.721L11.185 23.8423C11.364 23.9456 11.567 24 11.7736 24C11.9802 24 12.1832 23.9456 12.3622 23.8423L22.9567 17.721C23.2259 17.5657 23.4228 17.3103 23.5044 17.0103C23.586 16.7104 23.5457 16.3904 23.3922 16.1201C23.3153 15.9852 23.2125 15.8668 23.0896 15.7719C22.9668 15.6769 22.8264 15.6072 22.6765 15.5667C22.5266 15.5262 22.3702 15.5158 22.2162 15.536C22.0623 15.5562 21.9139 15.6067 21.7795 15.6845V15.7316Z"
                fill="#F3F3F3"
                fillOpacity="0.55"
              />
            </svg>
          </a>
          <h5>Library</h5>
        </div>
        <div className="menu-categore">
          <a href="#">
            <i className="bx bx-user"></i>
          </a>
          <h5>User</h5>
        </div>
        <div className="menu-categore">
          <a href="#">
            <i className="bx bx-setting"></i>
          </a>
          <h5>Settings</h5>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
