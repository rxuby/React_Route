import React from "react";
import "./Test32.css";
import hamburgerWhite from "../images/nemu-hamburger-white.png";
import calenderWhite from "../images/icon-calendar-white.png";
import restaurant from "../images/restuarant.png";
import handhold from "../images/hand-hold-money.png";
import coin from "../images/icon-coins.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Test32 = () => {
  return (
    <div>
      <div className="s-wrapper">
        <div className="s-container">
          <div className="s-nav">
            <img src={hamburgerWhite} alt="menu" style={{ float: "left" }} />
            <img
              src={calenderWhite}
              alt="calendar"
              style={{ float: "right" }}
            />
            <div className="s-abalance">
              <p>Avaiable Balance</p>
              <p style={{ fontSize: "1.5rem" }}>$7,392.00</p>
              <p>June 9, 2018</p>
            </div>
            <div className="s-card">
              <div className="s-box-number">
                <p style={{ fontSize: "18px" }}>42012</p>
                <p style={{ fontSize: "18px" }}>3049</p>
                <p style={{ fontSize: "18px" }}>2800</p>
                <p style={{ fontSize: "18px" }}>9815</p>
              </div>
              <div className="s-cv-number">
                <p>EXPIRE &gt; 02/22</p>
                <p>CVC CODE &gt; 230</p>
              </div>
            </div>
          </div>
          <div className="s-in-ex">
            <div className="s-in">
              <p>Income</p>
              <p>
                <FontAwesomeIcon icon={faArrowDown} /> $9,302.00
              </p>
            </div>
            <div className="s-ex">
              <p>Expense</p>
              <p>
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ marginRight: "5px" }}
                />{" "}
                $2,790.00
              </p>
            </div>
          </div>

          <div className="s-detail">
            <h2>Detail of movements</h2>
            <p>
              Weekly{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginRight: "5px" }}
              />
            </p>
          </div>

          <div className="s-box-detail1">
            <div className="s-box-img">
              <img
                src={restaurant}
                alt="restaurant icon"
                style={{ width: "40px" }}
              />
            </div>
            <div className="s-box-des">
              <h3>Restaurant</h3>
              <p>June 10, 2018</p>
            </div>
            <div className="s-tran">
              <p className="s-tran-red">
                $170{" "}
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ marginLeft: "20px" }}
                />
              </p>
            </div>
          </div>

          <div className="s-box-detail2">
            <div className="s-box-img">
              <img
                src={handhold}
                alt="hand hold money icon"
                style={{ width: "40px" }}
              />
            </div>
            <div className="s-box-des">
              <h3>Salary Deposit</h3>
              <p>June 1, 2018</p>
            </div>
            <div className="s-tran">
              <p className="s-tran-green">
                $1,200{" "}
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ marginLeft: "10px" }}
                />
              </p>
            </div>
          </div>

          <div className="s-box-detail4">
            <div className="s-box-img">
              <img src={coin} alt="coins icon" style={{ width: "40px" }} />
            </div>
            <div className="s-box-des">
              <h3>Salary Deposit</h3>
              <p>May 1, 2018</p>
            </div>
            <div className="s-tran">
              <p className="s-tran-green">
                $1,200{" "}
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ marginLeft: "10px" }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test32;
