import React from 'react'
import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"

function NewQuote() {

  const historyObj = useHistory();

  const addQuoteHandler = quoteData => {
    console.log(quoteData)
    historyObj.push("/quotes")
  }
  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuote