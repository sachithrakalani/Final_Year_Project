import style from "./reviewhomepage.module.css";

export default function ReviewHomePage() {
  return (
    <div>
      <div className={style.main}>
        <center>
          <h2 className={style.title}>Review Gard</h2>
          <label htmlFor="text">Past the Review</label>
          <input></input>
          <button className={style.button}>Submit</button>
          <lable className={style.resultlable}>Result</lable>
          <input className={style.resultinputfield}></input>
        </center>
      </div>
    </div>
  );
}
