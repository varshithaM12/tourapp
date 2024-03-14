import React, { useState } from "react";

function Home() {
  const [selectedState, setSelectedState] = useState("");

  const uniqueStates = [
    "Uttar Pradesh",
    "Rajasthan",
    "Goa",
    "West Bengal",
    "Kerala",
    "Maharashtra",
    "Himachal Pradesh",
    "Bihar",
    "Jharkhand",
  ];

  const filterHandler = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <div className="filter-option">
      <select onChange={(e) => filterHandler(e.target.value)}
      className={selectedState ? "active-select":"inactive-select"}
    >
        <option>show all states</option>
        {uniqueStates.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Home;