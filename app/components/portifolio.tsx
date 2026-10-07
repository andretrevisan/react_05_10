export default function Portifolio() {
    return (
        <div className="bg-taupe-200">
            <h1 className="text-xl font-bold mb-3.5 text-center">My Portfolio</h1>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white">
                    <div className="grid grid-cols-1 justify-items-center p-4">
                        <img src="img/pic02.svg" alt="Portifolio 1"  />
                    </div>
                    <div className="text-black p-2">
                        <h2 className="font-semibold p-1">Ipsum Consectetur</h2>
                        <p className="font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div >
                    <div className="flex justify-center p-2">
                        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Find Out More</button>    
                    </div>
                </div>

                <div className="bg-white">
                    <div className="grid grid-cols-1 justify-items-center p-4">
                        <img src="img/pic03.svg" alt="Portifolio 2"  />
                    </div>
                    <div className="text-black p-2">
                        <h2 className="font-semibold p-1">Ipsum Consectetur</h2>
                        <p className="font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="flex justify-center p-2">
                        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Find Out More</button>    
                    </div>
                </div>

                
                <div className="bg-white">
                    <div className="grid grid-cols-1 justify-items-center p-4">
                        <img src="img/pic04.svg" alt="Portifolio 3"  />
                    </div>
                    <div className="text-black p-2">
                        <h2 className="font-semibold p-1">Ipsum Consectetur</h2>
                        <p className="font-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className="flex justify-center p-2">
                        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Find Out More</button>    
                    </div>
                </div>
            </div>
        
        </div>
    
  );
}
