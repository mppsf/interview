import React, { useEffect, useRef, useState } from "react";

export const Form = () => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();

  return (
    <form
      className="form"
      onSubmit={() => {
        alert(`name: ${name}, address: ${address}`);
      }}
    >
      <label>
        Name:
        <input
          type="text"
          id="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          id="address"
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
