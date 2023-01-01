import axios from "axios";
import useAxios from "axios-hooks";
import { useDispatch } from "react-redux";
import { useEffect, useState, useContext } from "react";

const useSortBooks = () => {
  const sociology = "sociology";
  const uxDesign = "Ux design";
  const economics = "economics";
  const finance = "finance";
  const marketing = "marketing";
  const business = "business analysis";

  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [books, setBooks] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyB4XIBhdgrJlAzDQc8UDCiUW2vD6jA0WIs"
  );

  const handleSociology = () => {

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${sociology}&key=${apiKey}`
      )
      .then((data) => {
        console.log(data);
        setResult(data?.data?.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });

    // handleGetBooks();
    // console.log(booksData);
  };

  const handleUxdesign = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${uxDesign}&key=${apiKey}`
      )
      .then((data) => {
        console.log(data);
        setResult(data?.data?.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });

    // handleGetBooks();
    // console.log(booksData);
  };

  const handleEconomics = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${economics}&key=${apiKey}`
      )
      .then((data) => {
        console.log(data);
        setResult(data?.data?.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });

    // handleGetBooks();
    // console.log(booksData);
  };

  const handleFinance = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${finance}&key=${apiKey}`
      )
      .then((data) => {
        console.log(data);
        setResult(data?.data?.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });

    // handleGetBooks();
    // console.log(booksData);
  };

  const handleMarketing = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${marketing}&key=${apiKey}`
      )
      .then((data) => {
        console.log(data);
        setResult(data?.data?.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });

    // handleGetBooks();
    // console.log(booksData);
  };

  const handleBusiness = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${business}&key=${apiKey}`
      )
      .then((data) => {
        console.log(data);
        setResult(data?.data?.items);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setloading(false);
      });

    // handleGetBooks();
    // console.log(booksData);
  };

  
  const [{ ...booksData }, executePut] = useAxios(
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=${marketing}&key=${apiKey}`,
      method: "GET",
    },
    { manual: true }
  );

  const handleGetBooks = async () => {
    try {
      await executePut();
    } catch (err) {
      if (err.response) {
        // client received an error response (5xx, 4xx)
        console.log(err.response.data);
        console.log(err.response.status);
      } else if (err.request) {
        // client never received a response, or request never left
        console.log(err.request);
      } else {
        // anything else
        console.log("Error", err.message);
      }
      console.log(err);
    }
  };

  return {
    handleSociology,
    handleUxdesign,
    handleBusiness,
    handleEconomics,
    handleFinance,
    handleMarketing,
    result,
    loading,
    error,
    handleGetBooks,
    booksData
  };
};

export default useSortBooks;
