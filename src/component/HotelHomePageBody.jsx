import img1 from "./../../public/assets/Gallefacehotel.jpg";

export default function HotelHomePageBody() {
  return (
    <div>
      <div>
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <h2>Galle Face Hotel</h2>
          <div>
            <h2>$580</h2>
          </div>
        </div>
      </div>
      <div>
        <h2>Total 60 items</h2>
        <button>
          <i className="fas fa-arrow-left"></i>
        </button>
        <button></button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
