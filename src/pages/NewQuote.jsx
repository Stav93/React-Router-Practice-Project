import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"
import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api"

function NewQuote() {
  const {sendRequest, status} = useHttp(addQuote);
  const historyObj = useHistory();

  useEffect(() => {
    if (status === "completed") {
      historyObj.push("/quotes")
    }
  }, [status, historyObj])

  const addQuoteHandler = quoteData => {
    sendRequest(quoteData);
    // historyObj.push("/quotes")
  }
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuote