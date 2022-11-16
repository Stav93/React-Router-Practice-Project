import React from "react";
import { useParams, Route, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const params = useParams();

  const Quotes_Example = [
    { id: "q1", author: "Max", text: "Learning React Router" },
    { id: "q2", author: "Stav", text: "Learning React Router2" },
  ];

  const quote = Quotes_Example.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
      {/* <Route path="/quotes/:quoteId/comments"></Route> */}
    </>
  );
}

export default QuoteDetail;
