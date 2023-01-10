import axios from "axios";
import useAxios from "axios-hooks";
import { useState, useEffect } from "react";
import Books from "../../components/Library/books";
import useSortBooks from "../../hooks/useBooks";
import "./dashboard.scss";
import { Space, Spin } from "antd";
import TopNav from "../../components/Nav/topNav";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [books, setBooks] = useState("");
  const [result, setResult] = useState("");
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

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  const search1 = sociologyData?.data?.items?.filter((item) => {
    return item?.volumeInfo?.title?.toLowerCase()?.includes(books);
  });

  const search2 = uxDesignData?.data?.items?.filter((item) => {
    return item?.volumeInfo?.title?.toLowerCase()?.includes(books);
  });

  const search3 = economicsData?.data?.items?.filter((item) => {
    return item?.volumeInfo?.title?.toLowerCase()?.includes(books);
  });

  const search4 = financeData?.data?.items?.filter((item) => {
    return item?.volumeInfo?.title?.toLowerCase()?.includes(books);
  });

  const search5 = marketingData?.data?.items?.filter((item) => {
    return item?.volumeInfo?.title?.toLowerCase()?.includes(books);
  });

  const search6 = businessData?.data?.items?.filter((item) => {
    return item?.volumeInfo?.title?.toLowerCase()?.includes(books);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    books(e.target.value).toLowerCase();

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
      {/* <div className="dashboard-header">
        <h2> Available Books </h2>
      </div> */}
      <TopNav />
      <div className="search-container">
        <h3> Sort Library </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            name=""
            id=""
            value={books?.toLowerCase()}
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
              Web development
            </li>
            <li
              className={activeTab === 2 ? "active" : ""}
              onClick={() => {
                setActiveTab(2);
                handleUxdesign();
              }}
            >
              UI/UX Design
            </li>
            <li
              className={activeTab === 3 ? "active" : ""}
              onClick={() => {
                setActiveTab(3);
                handleEconomics();
              }}
            >
              Product Design
            </li>
            <li
              className={activeTab === 4 ? "active" : ""}
              onClick={() => {
                setActiveTab(4);
                handleFinance();
              }}
            >
              Data Analysis
            </li>
            <li
              className={activeTab === 5 ? "active" : ""}
              onClick={() => {
                setActiveTab(5);
                handleMarketing();
              }}
            >
              Product Management
            </li>
            <li
              className={activeTab === 6 ? "active" : ""}
              onClick={() => {
                setActiveTab(6);
                handleBusiness();
              }}
            >
              Artificial intelligence
            </li>
          </ul>
        </div>
        <div className="outlet">
          {/* ---------------- tab contents -------------- */}

          {activeTab === 1 && (
            <div className="books-view">
              {sociologyData.loading && (
                <div
                  className="example"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: 50,
                  }}
                >
                  <Space size="large">
                    <Spin size="large" />
                  </Space>
                </div>
              )}
              {!sociologyData.loading &&
                !sociologyData.error &&
                search1?.map((item, i) => <Books item={item} />)}

              {!sociologyData.loading &&
                !sociologyData.error &&
                search1?.length === 0 && (
                  <p className="no-books">No Books Available</p>
                )}
            </div>
          )}
          {activeTab === 2 && (
            <div className="books-view">
              {uxDesignData.loading && (
                <div
                  className="example"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: 50,
                  }}
                >
                  <Space size="large">
                    <Spin size="large" />
                  </Space>
                </div>
              )}
              {!uxDesignData.loading &&
                !uxDesignData.error &&
                search2?.map((item, i) => <Books item={item} />)}

              {!uxDesignData.loading &&
                !uxDesignData.error &&
                search2?.length === 0 && (
                  <p className="no-books">No Books Available</p>
                )}
            </div>
          )}
          {activeTab === 3 && (
            <div className="books-view">
              {economicsData.loading && (
                <div
                  className="example"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: 50,
                  }}
                >
                  <Space size="large">
                    <Spin size="large" />
                  </Space>
                </div>
              )}
              {!economicsData.loading &&
                !economicsData.error &&
                search3?.map((item, i) => <Books item={item} />)}
              {!economicsData.loading &&
                !economicsData.error &&
                search3?.length === 0 && (
                  <p className="no-books">No Books Available</p>
                )}{" "}
            </div>
          )}

          {activeTab === 4 && (
            <div className="books-view">
              {financeData.loading && (
                <div
                  className="example"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: 50,
                  }}
                >
                  <Space size="large">
                    <Spin size="large" />
                  </Space>
                </div>
              )}
              {!financeData.loading &&
                !financeData.error &&
                search4?.map((item, i) => <Books item={item} />)}
              {!financeData.loading &&
                !financeData.error &&
                search4?.length === 0 && (
                  <p className="no-books">No Books Available</p>
                )}{" "}
            </div>
          )}

          {activeTab === 5 && (
            <div className="books-view">
              {marketingData.loading && (
                <div
                  className="example"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: 50,
                  }}
                >
                  <Space size="large">
                    <Spin size="large" />
                  </Space>
                </div>
              )}
              {!marketingData.loading &&
                !marketingData.error &&
                search5?.map((item, i) => <Books item={item} />)}
              {!marketingData.loading &&
                !marketingData.error &&
                search5?.length === 0 && (
                  <p className="no-books">No Books Available</p>
                )}
            </div>
          )}

          {activeTab === 6 && (
            <div className="books-view">
              {businessData.loading && (
                <div
                  className="example"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    marginTop: 50,
                  }}
                >
                  <Space size="large">
                    <Spin size="large" />
                  </Space>
                </div>
              )}
              {!businessData.loading &&
                !businessData.error &&
                search6?.map((item, i) => <Books item={item} />)}
              {!businessData.loading &&
                !businessData.error &&
                search6?.length === 0 && (
                  <p className="no-books">No Books Available</p>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
