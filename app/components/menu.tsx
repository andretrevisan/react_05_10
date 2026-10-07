export default function Menu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-4">
      <div>
        <div className="grid grid-cols-1 justify-items-center p-4">
          <img src="img/icon2.svg" alt="Engrenagem" className="min-w-12 " />
        </div>
        <div className="bg-white-800 text-black text-center p-4">
          <h2 className="font-semibold p-1">Ipsum Consectetur</h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 justify-items-center p-4">
          <img src="img/icon3.svg" alt="Engrenagem" className="min-w-12 " />
        </div>
        <div className="bg-white-800 text-black text-center p-4">
          <h2 className="font-semibold p-1">Ipsum Consectetur</h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 justify-items-center p-4">
          <img src="img/icon1.svg" alt="Engrenagem" className="min-w-12 " />
        </div>
        <div className="bg-white-800 text-black text-center p-4">
          <h2 className="font-semibold p-1">Ipsum Consectetur</h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div></div>
      </div>
      
      
    </div>
    

  );
}