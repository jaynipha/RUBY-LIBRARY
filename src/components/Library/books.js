import { Link } from "react-router-dom";
import { RatingStar } from "rating-star";
import "./books.scss";

const Books = ({ item }) => {
  return (
    <div className="books-list">
      <img
        src={item.volumeInfo.imageLinks?.thumbnail}
        alt={item.volumeInfo.title}
      />

      <div className="book-info">
        <h3>{item.volumeInfo.title}</h3>
        <p>
          by{" "}
          {item?.volumeInfo?.authors === undefined
            ? "---"
            : item?.volumeInfo?.authors[0]}
        </p>

        <div className="preview-box">
          <Link to={`/aboutbook/${item.id}`}> Preview Book </Link>
          <RatingStar
            clickable
            maxScore={5}
            id="123"
            rating={3.5}
            // onRatingChange={onRatingChange}
          />
        </div>
        <Link to="/checkout"> Purchase Now </Link>
        {/* <h3>{item.saleInfo.saleability}</h3> */}
      </div>
    </div>
  );
};

export default Books;
