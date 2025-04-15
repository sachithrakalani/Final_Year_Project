import style from "./reviewhomepage.module.css";

export default function ReviewHomePage() {
  return (
    <div>
      <div className={style.main}>
        <center>
          <h2 className={style.title}>Review Gard</h2>
          <form>
            <label htmlFor="text" className={style.reviewlable}>Past the Review</label>
            <textarea id="review" className={style.reviewtextfield}></textarea>
            <button className={style.button}>Submit</button>
            <label htmlFor="result" className={style.resultlable}>
              Result
            </label>
            <input id="result" className={style.resultinputfield} readOnly />
          </form>
        </center>
      </div>
    </div>
  );
}