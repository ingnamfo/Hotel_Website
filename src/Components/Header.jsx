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
  

   <div className="container mx-auto  font-serif h-15 border-2 
   flex justify-center items-center gap-15 bg-emerald-100 rounded-3xl w-300 z-1000">

      <div classname= 'flex flex-col'>
      <img src="./Logo.jpg" alt="" className='h-7 w-7'/>
      <p>The Lapsi Tree</p>
    </div>
      {Navlinks.map((el,index)=>(
        <a href={el.url} key={index} className='text-2xl'
        >{el.title}</a>
    )  )}
    </div>
    
  )
}
