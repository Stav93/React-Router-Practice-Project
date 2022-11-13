import React from 'react'
import QuoteForm from "../components/quotes/QuoteForm"

function NewQuote() {

  const addQuoteHandler = quoteData => {
    console.log(quoteData)
  }
  return (
    <QuoteForm onAssQuote={addQuoteHandler}/>
  )
}

export default NewQuote