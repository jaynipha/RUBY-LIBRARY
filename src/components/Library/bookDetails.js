import { Link } from "react-router-dom";
import { RatingStar } from "rating-star";
import "./books.scss";

const BookDetails = ({ bookData }) => {
  return (
    <div className="about-books-list">
      <div className="book-desc">
        <p>{bookData?.data?.volumeInfo?.description}</p>

        <div className="preview-box-link">
            <Link to={"/"} className="purchase-link"> Purchase Now</Link>
        </div>
      </div>

      <div className="img-section">
        <img
          src={
            bookData?.data?.volumeInfo?.imageLinks?.extraLarge ||
            bookData?.data?.volumeInfo?.imageLinks?.thumbnail
          }
          alt={bookData?.data?.volumeInfo?.title}
        />

        <div className="img-contents">
          <h5>
            Title: <span> {bookData?.data?.volumeInfo?.title} </span>
          </h5>
          <h5>
            Page Count: <span>{bookData?.data?.volumeInfo?.pageCount}</span>{" "}
          </h5>
          <h5>
            Published:{" "}
            <span> {bookData?.data?.volumeInfo?.publishedDate} </span>{" "}
          </h5>
          <p>
            written by:
            {bookData?.data?.volumeInfo?.authors === undefined
              ? "---"
              : bookData?.data?.volumeInfo?.authors[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
