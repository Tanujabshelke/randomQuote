import React, { useState, useEffect } from "react";
import QuoteUi from "./QuoteUi";

//const url = "https://type.fit/api/quotes";

function Quote(url) {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://type.fit/api/quotes");

      let response = await res.json();
      let fData = response[2];
      // console.log(fData.text);
      setData(fData);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    const fetchData = async () => {
      let res = await fetch("https://type.fit/api/quotes");

      let response = await res.json();
      let fDataLen = response.length;
      let randomNum = Math.floor(Math.random() * fDataLen);
      // console.log(response.length);
      setData(response[randomNum]);
    };
    fetchData();
  };
  return (
    <div>
      <QuoteUi
        quote={data.text}
        author={data.author}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Quote;
