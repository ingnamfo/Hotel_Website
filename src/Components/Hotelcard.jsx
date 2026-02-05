import React from "react";
import room from "../assets/room.jpg";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";


const Rooms = [
    { id: 1, title: "Deluxe Suite Room", price: "500", image: room },
  { id: 2, title: "Executive Suite Room", price: "350", image: room1 },
  { id: 3, title: "Junior Suite Room", price: "450", image: room2 },
  { id: 4, title: "Premium Deluxe Villa", price: "1200", image: room4 },
  { id: 5, title: "Superior Deluxe Villa", price: "1600", image: room5 },
  { id: 6, title: "Deluxe Villa Room", price: "1000", image: room6},
];

export default function Hotelcard() {
  return (
    <div id="rooms" className="bg-gray-100 py-16 px-6">

   
      <div className="text-center mb-12">
        <p className="text-fuchsia-300 text-lg font-medium">
          Luxury Experience
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Rooms & Suites
        </h1>
      </div>

    
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Rooms.map((el) => (
          <div
            key={el.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={el.image}
              alt={el.title}
              className="w-full h-[450px] object-cover transition 
              duration-300 group-hover:scale-105"
            />

    
            <div className="absolute inset-0 bg-black/30"></div>

           
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm uppercase tracking-wide">
                From ${el.price} / Night
              </p>
              <h2 className="text-2xl font-semibold">{el.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}