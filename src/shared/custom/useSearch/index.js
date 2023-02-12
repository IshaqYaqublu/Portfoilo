import React, { useState } from "react";

const useSearch = (data) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);
    setFilteredData(
      data?.filter((item) =>
        item?.name?.first?.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return { search, handleSearch, filteredData };
};

export default useSearch;
