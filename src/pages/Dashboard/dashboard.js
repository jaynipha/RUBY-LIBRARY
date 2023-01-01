import axios from "axios";
import useAxios from "axios-hooks";
import { useState, useEffect } from "react";
import Books from "../../components/Library/books";
import useSortBooks from "../../hooks/useBooks";
import "./dashboard.scss";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [books, setBooks] = useState("");
  const {
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
  } = useSortBooks();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleSociology();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  // const [{ ...booksData }, executePut] = useAxios(
  //   {
  //     url: `https://www.googleapis.com/books/v1/volumes?q=${books}&key=${apiKey}`,
  //     method: "GET",
  //   },
  //   { manual: true }
  // );

  // const handleGetBooks = async () => {
  //   try {
  //     await executePut();
  //   } catch (err) {
  //     if (err.response) {
  //       // client received an error response (5xx, 4xx)
  //       console.log(err.response.data);
  //       console.log(err.response.status);
  //     } else if (err.request) {
  //       // client never received a response, or request never left
  //       console.log(err.request);
  //     } else {
  //       // anything else
  //       console.log("Error", err.message);
  //     }
  //     console.log(err);
  //   }
  // };

  const handleChange = (e) => {
    const book = e.target.value;
    setBooks(book);
  };

  // const results = booksData?.data?.map((item, i) => {
  //   return item;
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    // axios
    //   .get(
    //     `https://www.googleapis.com/books/v1/volumes?q=${books}&key=${apiKey}`
    //   )
    //   .then((data) => {
    //     console.log(data);
    //     setResult(data?.data?.items);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setloading(false);
    //   });

    // handleGetBooks();
  };

  console.log(sociologyData);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2> Available Books </h2>
      </div>
      <div className="search-container">
        <h3> Sort Library </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            name=""
            id=""
            placeholder="search books"
          />
          <button className="search-btn"> Search</button>
        </form>
      </div>

      <div className="books-container">
        <div className="tabs">
          {/* ----------  nav tab -------- */}
          <ul className="nav-tab">
            <li
              className={activeTab === 1 ? "active" : ""}
              onClick={() => {
                setActiveTab(1);
                handleSociology();
              }}
            >
              Sociology
            </li>
            <li
              className={activeTab === 2 ? "active" : ""}
              onClick={() => {
                setActiveTab(2);
                handleUxdesign();
              }}
            >
              UX Design
            </li>
            <li
              className={activeTab === 3 ? "active" : ""}
              onClick={() => {
                setActiveTab(3);
                handleEconomics();
              }}
            >
              Economics
            </li>
            <li
              className={activeTab === 4 ? "active" : ""}
              onClick={() => {
                setActiveTab(4);
                handleFinance();
              }}
            >
              Finance
            </li>
            <li
              className={activeTab === 5 ? "active" : ""}
              onClick={() => {
                setActiveTab(5);
                handleMarketing();
              }}
            >
              Marketing
            </li>
            <li
              className={activeTab === 6 ? "active" : ""}
              onClick={() => {
                setActiveTab(6);
                handleBusiness();
              }}
            >
              Business Analysis
            </li>
          </ul>
        </div>
        <div className="outlet">
          {/* ---------------- tab contents -------------- */}

          {activeTab === 1 && (
            <div className="books-view">
              {sociologyData?.data?.items?.map((item, i) => (
                <Books item={item} />
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className="books-view">
              {uxDesignData?.data?.items?.map((item, i) => (
                <Books item={item} />
              ))}
            </div>
          )}
          {activeTab === 3 && (
            <div className="books-view">
              {economicsData?.data?.items?.map((item, i) => (
                <Books item={item} />
              ))}
            </div>
          )}
          {activeTab === 4 && (
            <div className="books-view">
              {financeData?.data?.items?.map((item, i) => (
                <Books item={item} />
              ))}
            </div>
          )}
          {activeTab === 5 && (
            <div className="books-view">
              {marketingData?.data?.items?.map((item, i) => (
                <Books item={item} />
              ))}
            </div>
          )}
          {activeTab === 6 && (
            <div className="books-view">
              {businessData?.data?.items?.map((item, i) => (
                <Books item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
