export default function HotelHomePageHeader() {
  return (
    <div>
      <header>
        <div className={styles.header} >
          <h1 className={styles.title}>Hotels</h1>
          <div className= {styles.buttons}>
            <button>Sign In</button>
            <button>Log in</button>
          </div>
        </div>
      </header>
    </div>
  );
}
