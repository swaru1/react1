//import React from 'react'

function Card() {

  const handleClickDownload = ()=> {alert("Download Started...")};

  const data = [
    { name: "Mahiya ve", artist: "Arijit singh", description: "Lets put some random words to fill the damn space real quick." },
    { name: "Soniye", artist: "KK", description: "Lets put some random words to fill the damn space real quick."},
    { name: "Jannat", artist: "KK", description: "Lets put some random words to fill the damn space real quick." },
    { name: "Mona re", artist: "Bombay vikings", description: "Lets put some random words to fill the damn space real quick." },
    { name: "Saavan me", artist: "Falguni pathak", description: "Lets put some random words to fill the damn space real quick."},
  ];

  return (
    <div className="w-full h-screen bg-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
      {data.map((item, index) => (
        <div key={index} className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
          <h3 className="font-semibold text-xl">{item.name}</h3>
          <p className="font-semibold text-xs mt-2">
            {item.artist}
          </p>
          <p>
            {item.description}
          </p>
          <button onClick={handleClickDownload} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-3">
            Download now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
