import React from "react";
import "./Test31.css";
import hamburger from "../images/nemu-hamburger.png";
import visa from "../images/visa-svgrepo-com.svg";
import goldLeaf from "../images/gold-leaf.png";
import calender from "../images/icon-calendar.png";
import restaurant from "../images/restuarant.png";
import handhold from "../images/hand-hold-money.png";
import coin from "../images/icon-coins.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Test31 = () => {
  return (
    <div>
      <div className="t-wrapper">
        <div className="t-container">
          <div className="t-header">
            <img
              src={hamburger}
              alt="hanburger menu"
              style={{ width: "20px", float: "right", fontSize: "21px" }}
            />
            <h1>All my accounts</h1>
            <p>June 10, 2018</p>
          </div>
          <div className="t-slide-card">
            <div className="t-card">
              <div className="t-abalance">
                <div className="t-card-icon">
                  <img src={visa} alt="visa icon" />
                  <p>
                    Avaiable Balance <br />
                    $7,392.00
                  </p>
                </div>
                <div className="t-card-icon-leaf">
                  <img
                    src={goldLeaf}
                    alt="gold leaf icon"
                    style={{ width: "40px" }}
                  />
                </div>
              </div>
              <div className="t-box-number">
                <p>42012</p>
                <p>3049</p>
                <p>2800</p>
                <p>9815</p>
              </div>
              <div className="t-cv-number">
                <p>EXPIRE &gt; 02/22</p>
                <p>CVC CODE &gt; 230</p>
              </div>
            </div>
          </div>
          <div className="t-in-ex">
            <div className="t-in">
              <p>Income</p>
              <p>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ marginRight: "5px" }}
                />{" "}
                $9,302.00
              </p>
            </div>
            <div className="t-ex">
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
          <div className="t-detail">
            <h2>Detail of movements</h2>
            <img src={calender} alt="calendar" />
          </div>
          <div className="t-box-detail1">
            <div className="t-box-img">
              <img
                src={restaurant}
                alt="restaurant icon"
                style={{ width: "40px" }}
              />
            </div>
            <div className="t-box-des">
              <h3>Restaurant</h3>
              <p>June 10, 2018</p>
            </div>
            <div className="t-tran">
              <p className="t-tran-red">
                $170{" "}
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ marginLeft: "20px" }}
                />
              </p>
            </div>
          </div>
          <div className="t-box-detail2">
            <div className="box-img">
              <img
                src={handhold}
                alt="hand hold money icon"
                style={{ width: "40px" }}
              />
            </div>
            <div className="t-box-des">
              <h3>Salary Deposit</h3>
              <p>June 1, 2018</p>
            </div>
            <div className="t-tran">
              <p className="t-tran-green">
                $1,200{" "}
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ marginLeft: "10px" }}
                />
              </p>
            </div>
          </div>
          <div className="t-box-detail4">
            <div className="t-box-img">
              <img src={coin} alt="coins icon" style={{ width: "40px" }} />
            </div>
            <div className="t-box-des">
              <h3>Salary Deposit</h3>
              <p>May 1, 2018</p>
            </div>
            <div className="t-tran">
              <p className="t-tran-green">
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

export default Test31;
