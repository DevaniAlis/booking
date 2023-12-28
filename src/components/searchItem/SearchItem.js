import "./searchItem.css";

function SearchItem(props) {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/508881241.webp?k=45cd2a4a1cb527d6c9ea1a489f6ef2fa510cf09a6168ec644f6dcf25de368a86&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">The Ramida Suites At Delhi Airport</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio * 1 bathroom * 21m2 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later , so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
