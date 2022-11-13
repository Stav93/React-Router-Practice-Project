import React from "react";
import QuoteList from "../components/quotes/QuoteList"

const Quotes_Example = [
  { id: "q1", author: "Max", text: "Learning React Router" },
  { id: "q2", author: "Stav", text: "Learning React Router2" },
];

function AllQuotes() {
  return <QuoteList quotes={Quotes_Example}/>;
}

export default AllQuotes;
