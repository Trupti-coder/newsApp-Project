import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search for news..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
