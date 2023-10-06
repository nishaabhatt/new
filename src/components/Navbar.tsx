import React from 'react';
import Image from 'next/image';
import {IoSearchOutline} from "react-icons/io5";
import {AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2} from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="w-full bg-white text-black">
        <div className="w-full   border-b-4 border-black">
        <div className='mx-auto h-40 px-4 flex items-center justify-between gap-2 '>

{/* searchbar starts */}
<div className="h-10 w-[30%] sm:w-[300px] md:w-[15%] flex relative">
   <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none
   border-[1px] border-slate-200 focus-visible:border-black duration-200 " type="text"
   placeholder='Search...' />
   <span className="absolute w-8 h-8 rounded-full flex items-center justify-center
   top-1 right-1 bg-yellow text-black text-xl "><IoSearchOutline /></span>
</div>
{/* searchbar ends */}

{/* logo start here */}
 <div className="px-5 rounded-full bg-transparent flex items-center gap-2 
duration-300 cursor-pointer">
   <Image src="/logo.jpg" height={110} width={120} alt='' className='className="h-[6rem] w-[5rem] pt-5 sm:h-[8rem] sm:w-auto md:h-[6rem] md:w-auto lg:h-[8rem] lg:w-auto"'/>
 </div>
{/* logo end here */}

<div className="flex -mr-10">

{/* account start here */}
<div className="px-5 rounded-full bg-transparent flex items-center gap-2 
duration-300 cursor-pointer text-[20px] md:text-[30px]">
   <AiOutlineUser size={25}  />
   {/* <h2 className="text-base font-semibold ">Account</h2> */}
 </div>
{/* account end here */}

{/* wishlist start here */}
 <div className="px-5 rounded-full bg-transparent flex items-center gap-2 
duration-300 cursor-pointer">
   <AiOutlineHeart size={25}  className="hover:text-red-900" />
   {/* <h2 className="text-base font-semibold hover:bg-hoverBg hover:text-white">Wishlist</h2> */}
 </div>
{/* wishlist end here */}

{/* cart start here */}
<div className=" flex relative flex-col justify-center px-5 rounded-full bg-transparent 
 items-center gap-2 duration-300 cursor-pointer">
   <BsCart2  className="hover:text-red-500 text-3xl" />
   {/* <h2 className="text-base font-semibold ">Cart</h2> */}
   <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4
   rounded-full flex items-center justify-center  text-xs ">0</span>
 </div>
{/* cart end here */}

        </div>

        </div>


        </div>
    </div>
  )
}

export default Navbar

// import React from 'react';
// import Image from 'next/image';
// import { IoSearchOutline } from "react-icons/io5";
// import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
// import { BsCart2 } from "react-icons/bs";

// const Navbar = () => {
//   return (
//     <div className="w-full bg-white text-black">
//       <div className="w-full h-full border-b-4 border-black">
//         <div className='max-w-container mx-auto h-30 px-4 flex items-center justify-between gap-2 '>

//           {/* Mobile View (Logo on Left, Search Bar in Center) */}
//           <div className="w-full md:hidden flex items-center justify-between">
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <Image src="/logo.jpg" height={110} width={120} alt='' />
//             </div>
//             <div className="h-10 flex relative flex-1">
//               <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none border-[1px] border-slate-200 focus-visible:border-black duration-200" type="text" placeholder='Search...' />
//               <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl "><IoSearchOutline /></span>
//             </div>
//           </div>

//           {/* Desktop View */}
//           <div className="hidden md:flex items-center">

//             {/* Searchbar */}
//             <div className="h-10 flex relative">
//               <input className="h-full w-full rounded-sm px-4 text-black text-base outline-none border-[1px] border-slate-200 focus-visible:border-black duration-200" type="text" placeholder='Search...' />
//               <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl "><IoSearchOutline /></span>
//             </div>

//             {/* Logo */}
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <Image src="/logo.jpg" height={110} width={120} alt='' />
//             </div>

//             {/* Account */}
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <AiOutlineUser size={25} />
//             </div>

//             {/* Wishlist */}
//             <div className="px-5 rounded-full bg-transparent flex items-center gap-2 duration-300 cursor-pointer">
//               <AiOutlineHeart size={25} className="hover:text-red-900" />
//             </div>

//             {/* Cart */}
//             <div className="flex relative flex-col justify-center px-5 rounded-full bg-transparent items-center gap-2 duration-300 cursor-pointer">
//               <BsCart2 className="hover:text-red-500 text-3xl" />
//               <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center text-xs ">0</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar;


