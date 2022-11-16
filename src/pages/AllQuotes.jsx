import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound"
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const Quotes_Example = [
  { id: "q1", author: "Max", text: "Learning React Router" },
  { id: "q2", author: "Stav", text: "Learning React Router2" },
];

function AllQuotes() {
  const {
    sendRequest,
    status,
    data: LoadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centeres">
        {" "}
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!LoadedQuotes || LoadedQuotes.length === 0)) {
    return <NoQuotesFound/>
  }

  return <QuoteList quotes={LoadedQuotes} />;
}

export default AllQuotes;
