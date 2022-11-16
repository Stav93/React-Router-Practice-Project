import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"


function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();

  // const Quotes_Example = [
  //   { id: "q1", author: "Max", text: "Learning React Router" },
  //   { id: "q2", author: "Stav", text: "Learning React Router2" },
  // ];

  const { sendRequest, status, data: LoadedQuote, error } = useHttp(getSingleQuote, true)

  // const quote = Quotes_Example.find((quote) => quote.id === params.quoteId);

  // if (!quote) {
  //   return <p>No Quote Found</p>;
  // }

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  if (status === "pending") {
    return <div className="centered">
      <LoadingSpinner/>
    </div>
  }

  if (error) {
    return <p className="centered">
     {error}
    </p>
  }

  if (!LoadedQuote.text) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <HighlightedQuote text={LoadedQuote.text} author={LoadedQuote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route> */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
      {/* <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route> */}
      {/* <Route path="/quotes/:quoteId/comments"></Route> */}
    </>
  );
}

export default QuoteDetail;
