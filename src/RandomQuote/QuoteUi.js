import React from "react";
import "./QuoteUi.css";
import TwitterIcon from "@material-ui/icons/Twitter";

//import Quote from "./Quote";

function QuoteUi(props) {
  return (
    <div className="main">
      <div id="quote-box">
        <div className="quote-box--text">
          <h3 id="text">" {props.quote} "</h3>
          <p id="author"> - by {props.author}</p>
        </div>
        <div className="qoute-box--buttons">
          <button id="tweet-quote">
            <a href="twitter.com/intent/tweet" target="_blank">
              <TwitterIcon className="color"></TwitterIcon>
            </a>
          </button>
          <button id="new-quote" onClick={props.handleClick}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteUi;
