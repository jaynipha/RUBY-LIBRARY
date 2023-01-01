import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookDetails from "../../components/Library/bookDetails";
import useSortBooks from "../../hooks/useBooks";

const AboutBooks = () => {
  const { bookData, handleGetBook } = useSortBooks();
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleGetBook(id);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  console.log(id);
  console.log(bookData);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2> About Book </h2>

        {!bookData.loading && !bookData.error && bookData?.data && (
          <BookDetails bookData={bookData} />
        )}
      </div>
    </div>
  );
};

export default AboutBooks;
