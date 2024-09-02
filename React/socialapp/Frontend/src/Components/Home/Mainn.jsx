import React from 'react'
import {Link} from 'react-router-dom';
function Mainn() {
  return (
    <div>
      <div className='lg:flex lg:flex-row sm:flex-col'>
        <section style={{
          backgroundImage: "linear-gradient(-45deg, #4094B0, #A0E0EC, #4094B0)", // Gradient from #0D0F0E to #8F373B and back to #0D0F0E
          
          width: "98%",
        }}
          className='flex flex-col justify-center lg:w-1/2 sm:w-full p-20'>
          <div className='text-red-500 text-7xl'>Stay Curious</div>
          <div className='text-red-500 text-2xl mb-10'>Discover stories, thinking, and connect world wide minds.</div>
          
        </section>
        <section className='w-1/2'
        style={{
          width:"98%",
        }}
        >
          <img style={{ height: "600px" }} src="https://plus.unsplash.com/premium_photo-1683842190248-5530320b8cab?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
        </section>

      </div>
    </div>
  )
}


export default Mainn


// import React from 'react';

// function Mainn() {
//   return (
//     <div className="flex flex-col lg:flex-row"> {/* Use flex-col for mobile and lg:flex-row for large screens and above */}
//       <section
//         style={{
//           backgroundImage: "linear-gradient(-45deg, #0D0F0E, #8F373B, #A88AE0)",
//           padding: "20px",
//           width: "100%", // Set width to 100% for mobile
//           position: "relative"
//         }}
//         className="flex flex-col justify-center lg:w-1/2 lg:p-20" // Adjust padding and width for large screens
//       >
//         <div className="text-white text-7xl mb-20">Stay Curious</div>
//         <div className="text-white text-2xl mb-10">Discover stories, thinking, and expertise from writers on any topic.</div>
//         <div className="text-white">
//           <button
//             type="button"
//             className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//           >
//             Explore Now
//           </button>
//         </div>
//       </section>
//       <section className="w-full lg:w-1/2"> {/* Set width to full for mobile and lg:w-1/2 for large screens */}
//         <img
//           style={{ height: "auto", width: "100%" }} // Set image width to 100% for mobile
//           src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt=""
//           className="w-full lg:w-1/2 object-cover"
//         />
//       </section>
//     </div>
//   );
// }

// export default Mainn;
