import React from "react";
import welcome from "../assets/welcome.jpg"; 

export default function Welcome() {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
    
      <p className="text-fuchsia-400 text-2xl font-bold font-serif mb-2">Welcome To</p>

 
      <h1 className="text-2xl md:text-3xl font-bold font-serif mb-6">
        The Lapsi Tree Resort
      </h1>

 
      <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed mb-10">
        Lapsi Tree Resort is a peaceful hillside retreat 
        nestled near Nagarkot, Nepal, offering stunning mountain views
         and a calm natural setting. Blending comfort with eco-friendly practices, 
         the resort invites guests to relax, reconnect with nature, and experience
          warm local hospitality, cultural activities, and rejuvenating outdoor
           experiences in a serene environment.

      </p>

      
      <div className="max-w-5xl mx-auto">
        <img
          src={welcome}
          alt="Himalayan View"
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}