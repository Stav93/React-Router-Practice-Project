import { useRef, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
// A component which we can render and automaticly wach if we try to navigate away and if a certin condition is met it will show us a warnng before it allows us to leave.
import { Prompt } from "react-router-dom";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  //checking i the user is currently on the form to show a warning if the user tries to navigate away
  const formFocusedHabdler = () => {
    setIsEntering(true);
  };

  //making sure the warning message wont show when the user sumbit the form
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  return (
    <>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? all your entered data will be lost"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHabdler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
