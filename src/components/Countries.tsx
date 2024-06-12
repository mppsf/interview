import React, { useEffect, useState } from "react";

function fetchCountries(search) {
//   https://restcountries.com/v3.1/name/${search}`

}

export const Countries = () => {
  const [search, setSearch] = useState("");
  let countries = fetchCountries(search)

  return (
    <div className="countries">
      <div>Countries</div>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    {/* {countries ...} */}
    </div>
  );
};
