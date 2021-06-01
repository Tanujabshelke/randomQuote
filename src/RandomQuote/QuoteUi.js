import React from "react";
import "./QuoteUi.css";
import TwitterIcon from "@material-ui/icons/Twitter";

//import Quote from "./Quote";

function QuoteUi({ quote, author = " unknown", handleClick }) {
  return (
    <div className="main">
      <div id="quote-box">
        <div className="quote-box--text">
          <h3 id="text">" {quote} "</h3>
          <p id="author"> - by {author}</p>
        </div>
        <div className="qoute-box--buttons">
          <button id="tweet-quote">
            <a
              href="https://twitter.com/intent/tweet?text=Hello%20world"
              target="_blank"
            >
              <TwitterIcon className="color"></TwitterIcon>
            </a>
          </button>
          <button id="new-quote" onClick={handleClick}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteUi;
