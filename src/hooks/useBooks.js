import axios from "axios";
import useAxios from "axios-hooks";
import { useDispatch } from "react-redux";
import { useEffect, useState, useContext } from "react";

const useSortBooks = () => {
  const sociology = "web development";
  const uxDesign = "ui/Ux design";
  const economics = "product design";
  const finance = "data analysis";
  const marketing = "product management";
  const business = "artificial intelligence";

  const [apiKey, setApiKey] = useState(
    "AIzaSyB4XIBhdgrJlAzDQc8UDCiUW2vD6jA0WIs"
  );

  //
  //SOCIOLOGY
  const [{ ...sociologyData }, getSociology] = useAxios(
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=${sociology}&key=${apiKey}`,
      method: "GET",
      params: {
        startIndex: 1,
        maxResults: 40,
      },
    },
    { manual: true }
  );

  const handleSociology = async () => {
    try {
      await getSociology();
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

  //
  //UX DESIGN
  const [{ ...uxDesignData }, getUxDesign] = useAxios(
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=${uxDesign}&key=${apiKey}`,
      method: "GET",
      params: {
        startIndex: 0,
        maxResults: 40,
      },
    },
    { manual: true }
  );

  const handleUxdesign = async () => {
    try {
      await getUxDesign();
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

  //
  //ECONOMICS
  const [{ ...financeData }, getFinance] = useAxios(
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=${finance}&key=${apiKey}`,
      method: "GET",
      params: {
        startIndex: 0,
        maxResults: 40,
      },
    },
    { manual: true }
  );

  const handleFinance = async () => {
    try {
      await getFinance();
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

  //
  //ECONOMICS
  const [{ ...economicsData }, getEconomics] = useAxios(
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=${economics}&key=${apiKey}`,
      method: "GET",
      params: {
        startIndex: 0,
        maxResults: 40,
      },
    },
    { manual: true }
  );

  const handleEconomics = async () => {
    try {
      await getEconomics();
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

  //
  //MARKETING
  const [{ ...marketingData }, getMarketing] = useAxios(
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=${marketing}&key=${apiKey}`,
      method: "GET",
      params: {
        startIndex: 0,
        maxResults: 40,
      },
    },
    { manual: true }
  );

  const handleMarketing = async () => {
    try {
      await getMarketing();
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

  //
  //BUSINESS ANALYSIS
  const [{ ...businessData }, getBusiness] = useAxios(
    {
      url: `https://www.googleapis.com/books/v1/volumes?q=${business}&key=${apiKey}`,
      method: "GET",
      params: {
        startIndex: 0,
        maxResults: 40,
      },
    },
    { manual: true }
  );

  const handleBusiness = async () => {
    try {
      await getBusiness();
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

  //
  //ABOUT BOOK
  const [{ ...bookData }, getBook] = useAxios(
    {
      method: "GET",
    },
    { manual: true }
  );

  const handleGetBook = async (id) => {
    try {
      await getBook({
        url: `https://www.googleapis.com/books/v1/volumes/${id}`,
      });
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

  //
  //
  //REGISTER USER
  const [{ ...registerUserData }, registerUser] = useAxios(
    {
      method: "POST",
    },
    {
      manual: true,
    }
  );

  const handleRegisterUser = async (data) => {
    try {
      await registerUser({
        url: `https://good-tan-viper-hose.cyclic.app/register`,
        data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    handleSociology,
    sociologyData,
    handleUxdesign,
    uxDesignData,
    handleBusiness,
    businessData,
    handleEconomics,
    economicsData,
    handleFinance,
    financeData,
    handleMarketing,
    marketingData,
    handleGetBook,
    bookData,
    handleRegisterUser,
    registerUserData,
  };
};

export default useSortBooks;
