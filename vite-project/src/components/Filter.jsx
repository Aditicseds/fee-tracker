import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className="filter-section">
      <h2>Filter by Fee Status</h2>
      <select value={filter} onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="All">All</option>
        <option value="Fully Paid">Fully Paid</option>
        <option value="Partially Paid">Partially Paid</option>
        <option value="Unpaid">Unpaid</option>
      </select>
    </div>
  );
};

export default Filter;
