import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments"

function QuoteDetail() {
  const params = useParams();

  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
      {/* <Route path="/quotes/:quoteId/comments"></Route> */}
    </>
  );
}

export default QuoteDetail;
