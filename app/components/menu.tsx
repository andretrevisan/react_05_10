export default function Menu() {
  return (
    <div>
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
      <div className="flex justify-center p-4 gap-4 ">
          <div>
            <button className="bg-red-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
          </div>
          <div>
            <button className="bg-black text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
    </div>


  );
}