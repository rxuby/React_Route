import image1 from "../images/menu_bar.png";
import image2 from "../images/airport_icon.png";
import image3 from "../images/easy_booking_icon.png";
import image4 from "../images/group_icon.png";
import image5 from "../images/leio-mclaren-jEgQpfkHEWY-unsplash.jpg";
import image6 from "../images/daniel-jensen-tQpypKA92k8-unsplash.jpg";
import image7 from "../images/fabio-comparelli-uq2E2V4LhCY-unsplash.jpg";
import image8 from "../images/yousef-alfuhigi-bMIlyKZHKMY-unsplash.jpg";
import star from "../images/star_icon.png";
import styles from "./style.module.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Test2 = () => {
  return (
    <div className={styles.screen}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <h2>IsLand</h2>

          <ul className={styles.navbar}>
            <li>Our tours</li>
            <li>About us</li>
            <li>About us</li>
            <li>Booking</li>
            <li>FAQ</li>
          </ul>

          <div>
            <img src={image1} alt="menu bar" />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div>
          <h1>
            Explore the sights <br /> of the Azores
          </h1>
          <p>A place where nature and adventure unite</p>
          <button>Book now</button>
          <div className={styles.iconbox}>
            <BsArrowLeftCircle className={styles.iconleft} />{" "}
            <BsArrowRightCircleFill className={styles.iconright} />
          </div>
        </div>
      </div>

      <div className={styles.menubox}>
        <h1>Top Values for you</h1>
        <p>Try variety of benefirts when using our services</p>
        <div className={styles.menu}>
        
            <div>
              <div className={styles.bg}>
                <img
                  className={styles.service}
                  src={image2}
                  alt="Airport pickup"
                />
              </div>
              <h3>Airport pickup</h3>
              <p>xxxxxxxx xxxxxxxx xxxx <br/> xxxxxxxxxxxxx</p>
            </div>

            <div>
              <div className={styles.bg}>
                <img
                  className={styles.service}
                  src={image3}
                  alt="Easy booking"
                />
              </div>
              <h3>Easy booking</h3>
              <p>xxxxxxxx xxxxxxxx xxxx <br/> xxxxxxxxxxxxx</p>
            </div>

            <div>
              <div className={styles.bg}>
                <img
                  className={styles.service}
                  src={image4}
                  alt="Best tour guide"
                />
              </div>
              <h3>Best tour guide</h3>
              <p>xxxxxxxx xxxxxxxx xxxx <br/> xxxxxxxxxxxxx</p>
            </div>

            <div>
              <div className={styles.bg}>
                <img
                  className={styles.service}
                  src={image4}
                  alt="Lots of promos"
                />
              </div>
              <h3>Lots of promos</h3>
              <p>xxxxxxxx xxxxxxxx xxxx <br/> xxxxxxxxxxxxx</p>
            </div>
          </div>
        </div>
     

      <div className={styles.menucard}>
        <h1>Choose your tour</h1>
      </div>

      <div className={styles.cardbox}>
        <div className={styles.card}>
          <div className={styles.rate}>
            5.0 <img src={star} alt="star" />
          </div>
          <img src={image5} alt="Alone with nature" />
          <BsArrowRightCircleFill className={styles.iconcard} />
          <div className={styles.container}>
            <h3>Alone with nature</h3>
            <p>$ 100 </p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.rate}>
            4.9 <img src={star} alt="star" />
          </div>
          <img src={image6} alt="The beach" />
          <BsArrowRightCircleFill className={styles.iconcard} />
          <div className={styles.container}>
            <h3>The beach</h3>
            <p>$ 200</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.rate}>
            5.0 <img src={star} alt="star" />
          </div>
          <img src={image7} alt="Mountain nature" />
          <BsArrowRightCircleFill className={styles.iconcard} />
          <div className={styles.container}>
            <h3>Mountain nature</h3>
            <p>$ 150</p>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.rate}>
            4.9 <img src={star} alt="star" />
          </div>
          <img src={image8} alt="Airport thailand" />
          <BsArrowRightCircleFill className={styles.iconcard} />
          <div className={styles.container}>
            <h3>Airport thailand</h3>
            <p>$ 80</p>
          </div>
        </div>
      </div>
      <button className={styles.buttonall}>See all</button>
    </div>
  );
};

export default Test2;
