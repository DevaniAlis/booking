import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Hotel(props) {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/417382810.webp?k=8287fe921d4f903dc3c7e75949853368540233b305f500dad6bab2e72cff0a74&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/50077530.webp?k=4f73bfcb07fed22d31ce8a5689a9076062218a4af63b35c8008a367926e9f691&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/17934486.webp?k=152af26d3c6a33b48c8c47d9dc4d30ec94ced9a54b48c49aef86ca6607bf030d&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/267312403.webp?k=d26d1eefc1c1fe0779dea01e22408a5f737d7123bef435621f0e864ca131df69&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/365473483.webp?k=040cfa75f3ff1241e2ed69fdb16856506db2c680d2e59fb5383ef713bd3a261a&o=",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/513002027.webp?k=dc4416aa27058a0357e32d169b1a44a7ddf950805c5ebbfd22e405b07234e1c8&o=",
    },
  ];

  const handleOpen = (i) => {
    setSliderNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSlideNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[sliderNumber].src}
                alt=""
                className="sliderImg"
              ></img>
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow"> Reserve or Book Now! </button>
          <h1 className="hotelTitle"> Grand Hotel </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton st 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Waldschenke Stendenitz Übernachten im Wald am See offers a sauna
                and free private parking, and is within 7.1 miles of Kulturhaus
                Stadtgarten and 27 miles of Mirow Castle. There's a private
                entrance at the apartment for the convenience of those who stay.
                The property offers bike rental and features a garden and
                children's playground. At the apartment complex, the units
                include a outdoor furniture, a flat-screen TV, a private
                bathroom, bed linen, and towels. An oven, a toaster, and fridge
                are also offered, as well as a coffee machine and a kettle.
                Breakfast is available every morning, and includes continental,
                vegetarian and vegan options. Guests at the apartment will be
                able to enjoy activities in and around Neuruppin, like hiking.
                The apartment complex has a picnic area where you can spend the
                day outdoors.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
