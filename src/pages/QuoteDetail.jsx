import React from "react";
import { useParams } from "react-router-dom";

function QuoteDetail() {
  const params = useParams();

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
    </>
  );
}

export default QuoteDetail;
