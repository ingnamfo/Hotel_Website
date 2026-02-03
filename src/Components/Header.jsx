import React from 'react'
const Navlinks = [
 

  { title: "About", url: "/about",},
  { title: "Room & Suites", url: "/room",},
    { title: "Amenities", url: "/amenities",},
  { title: "Dining", url: "/dining",},
  { title: "Contact us", url: "/contact",},
];
export default function Header() {
  return (
    <div className="hidden md:flex justify-center gap-13 items-center bg-emerald-200 font-bold font-mono">
    
      {Navlinks.map((el,index)=>(
        <a href={el.url} key={index}>{el.title}</a>
    )  )}
    </div>
    
  )
}
