import { Link, useNavigate, useParams } from "react-router-dom";
import { RatingStar } from "rating-star";
import "./books.scss";
import parse from "html-react-parser";
import { useState } from "react";

const BookDetails = ({ bookData }) => {
  const navigate = useNavigate();
  const htmlString = bookData?.data?.volumeInfo?.description;
  const htmlString2 = parse(htmlString);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const openProfile = (bookData) => {
    navigate(`/checkout`, {
      state: {
        // fullname: `${data.firstName} ${data.otherName}`,
        thumbnail: bookData?.data?.volumeInfo?.imageLinks?.thumbnail,
        extraLarge: bookData?.data?.volumeInfo?.imageLinks?.extraLarge,
        // status: `${data.activation === null ? "Inactive" : "Active"}`,
      },
    });
  };
  return (
    <div className="about-books-list">
      <div className="book-desc">
        <p className={isReadMore ? "desc-stext" : "dec-ltext"}>{isReadMore ? htmlString2.slice(0, 1500) : htmlString2}</p>
        <span className="readmore-switch" onClick={toggleReadMore}>
          {isReadMore ? "...continue reading" : "show less"}
        </span>
        <div className="preview-box-link" onClick={() => openProfile(bookData)}>
          <Link to={"/checkout"} className="purchase-link">
            {" "}
            Purchase Now
          </Link>
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
          <p className="author">
            written by:{" "}
            <span>
              {bookData?.data?.volumeInfo?.authors === undefined
                ? "---"
                : bookData?.data?.volumeInfo?.authors[0]}
            </span>
          </p>
          <h5>
            Page Count: <span>{bookData?.data?.volumeInfo?.pageCount}</span>{" "}
          </h5>

          <div className="other-details">
            <div className="od-one">
              <h6> Publish Date </h6>
              <p> {bookData?.data?.volumeInfo?.publishedDate} </p>
            </div>
            <div className="od-one">
              <h6> Publisher </h6>
              <p> {bookData?.data?.volumeInfo?.publisher} </p>
            </div>
            <div className="od-one">
              <h6> Language </h6>
              {/* <p> {bookData?.data?.volumeInfo?.language} </p> */}
              <p> English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
