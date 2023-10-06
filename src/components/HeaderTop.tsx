// import React from 'react'

// const content = {
//     heading : "Limited-time offer: “Hurry! 25% off all products ends in 3 days!",
// }
// const HeaderTop = () => {
//   return (
//     <div className="bg-[#153d4f] w-full hidden md:block ">
//         <div className="container mx-auto px-4 -py-2">
//             {content.heading && (
//               <p className="justify-between text-center text-white font-medium text-lg">{content.heading}</p>
//             )}
//         </div>
//     </div>
//   )
// }

// export default HeaderTop

import React from 'react';

const content = {
  heading: 'Limited-time offer: “Hurry! 25% off all products ends in 3 days!',
};

const HeaderTop = () => {
  return (
    <div className="bg-[#153d4f] w-full hidden md:block">
      <div className="container mx-auto px-4 py-1">
        {content.heading && (
          <p className="text-center text-white font-medium text-[15px]">
            {content.heading}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderTop;
