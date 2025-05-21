import style from "./reviewhomepage.module.css";
import React, { useState } from "react";
import axios from "axios";

export default function ReviewHomePage() {
  const [review, setReview] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/review", {
        review,
      });
      console.log({ Response: response });
      setResult(response.data.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    setReview("");
    setResult("");
  };

  return (
    <div>
      <div className={style.main}>
        <center>
          <h2 className={style.title}>Review Guard</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="review" className={style.reviewlable}>
              Paste the Review
            </label>
            <textarea
              id="review"
              className={style.reviewtextfield}
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <div className={style.buttons}>
              <button className={style.button} type="submit">
                Submit
              </button>
              <button
                className={style.button}
                type="button"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>

            <label htmlFor="result" className={style.resultlable}>
              Result
            </label>
            <input
              id="result"
              className={style.resultinputfield}
              readOnly
              value={result}
            />
          </form>
        </center>
      </div>
    </div>
  );
}

