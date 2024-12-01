function Card() {

  const data = [
    {image: "https://plus.unsplash.com/premium_photo-1732736768058-42f76dc6e6e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8", 
      name:"Sunsets", 
      status: false,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {image: 'https://images.unsplash.com/photo-1732364896193-bc4f299d1de1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8', 
      name: "Blossoms", 
      status: false,  // Add a new property to indicate whether the card is status or not
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {image: 'https://images.unsplash.com/photo-1732539661267-5a6b5e6aa65e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D', 
      name: "Scapes", 
      status: true,
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit"},
    {image: 'https://images.unsplash.com/photo-1732482124606-697008dab09c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', 
      name: "Shores", 
      status: false,  // Add a new property to indicate whether the card is status or not
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit"},
  ]

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index)=>(
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img className="w-full h-full object-cover"
            src={elem.image} 
            alt="" 
            />
          </div>
          <div className="w-full px-3 py4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-1 mb-3">
              {elem.description}
            </p>
            <button className={`px-4 py-1 ${elem.status ? 'bg-red-600' : 'bg-blue-600'} text-xs text-zinc-100 rounded mt-0 mb-3`}>
              {elem.status ? "Booked" : "Book now"}
            </button>
          </div>
        </div>
      ))};
    </div>
  );
}

export default Card