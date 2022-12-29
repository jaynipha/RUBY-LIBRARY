import { useState } from "react";
import Books from "../../components/Library/books";
import "./dashboard.scss"

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2> Available Books </h2>
      </div>
      <div className="search-container">
        <h3> Sort Library </h3>
        <input type="search" name="" id="" placeholder="search books" />
      </div>

      <div className="books-container">
        <div className="tabs">
          {/* ----------  nav tab -------- */}
          <ul className="nav-tab">
            <li
              className={activeTab === 1 ? "active" : ""}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Sociology
            </li>
            <li
              className={activeTab === 2 ? "active" : ""}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              UX Design
            </li>
            <li
              className={activeTab === 3 ? "active" : ""}
              onClick={() => {
                setActiveTab(3);
              }}
            >
              Economics
            </li>
            <li
              className={activeTab === 4 ? "active" : ""}
              onClick={() => {
                setActiveTab(4);
              }}
            >
              Finance
            </li>
            <li
              className={activeTab === 5 ? "active" : ""}
              onClick={() => {
                setActiveTab(5);
              }}
            >
              Marketing
            </li>
            <li
              className={activeTab === 6 ? "active" : ""}
              onClick={() => {
                setActiveTab(6);
              }}
            >
              Business Analysis
            </li>
          </ul>
        </div>
        <div className="outlet">
          {/* ---------------- tab contents -------------- */}

          {activeTab === 1 && <Books />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
