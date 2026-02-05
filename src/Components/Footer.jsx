import React from "react";

export default function Footer() {
  return (
    <footer className="bg-emerald-100 text-black-200 py-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
       
        <div>
          <h2 className="text-2xl font-bold mb-4">The Lapsi Tree Hotel</h2>
          <p className="mb-2">123 Mountain View Road</p>
          <p className="mb-2">Kathmandu, Nepal</p>
          <p className="mb-2">Phone: +977 9812345676</p>
          <p>Email: info@lapsitree.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-fuchsia-300">Home</a></li>
            <li><a href="/rooms" className="hover:text-fuchsia-300">Rooms</a></li>
            <li><a href="/about" className="hover:text-fuchsia-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-fuchsia-300">Contact</a></li>
            <li><a href="/booking" className="hover:text-fuchsia-300">Booking</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
          <p className="mb-4">
           Luxury stays. Stunning mountain views. Genuine hospitality.
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} The Lapsi Tree Hotel.
             All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}