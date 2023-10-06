
import React, { useState } from 'react';

function Navbar() {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (dropdownName) => {
//     setActiveDropdown((prevActiveDropdown) =>
//       prevActiveDropdown === dropdownName ? null : dropdownName
//     );
//   };

const [activeDropdown, setActiveDropdown] = useState(null);

const toggleDropdown = (dropdownName) => {
  setActiveDropdown((prevActiveDropdown) =>
    prevActiveDropdown === dropdownName ? null : dropdownName
  );
};

  return (
    <nav className="shadow-sm text-black mb-10 bg-slate-50 mt-1">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menu */}
        <ul className="flex space-x-4 md:flex w-fit gap-12 mx-auto list-none">
          <li className="relative group">
            <a
              href="/"
              className="no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
            >
              HOME
            </a>
          </li>
          <li className="relative group">
            <a
              href="#"
              className=" no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown('category')}
            >
              CATEGORY
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === 'category' ? 'block' : 'hidden'
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <div className="flex space-x-20">
                <div className="w-1/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Men's Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Rings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Necklaces
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-2/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Women's Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Earrings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-3/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Collections
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Summer Collection
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Holiday Collection
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className=" no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown('jewelry')}
            >
              JEWELRY
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === 'jewelry' ? 'block' : 'hidden'
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <div className="flex space-x-4">
                <div className="w-1/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Men's Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Rings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Necklaces
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-2/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Women's Jewelry
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Earrings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-1/4">
                  <h2 className="font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline">
                    Collections
                  </h2>
                  <ul className="list-none">
                    <li>
                      <a href="#" className="no-underline">
                        Summer Collection
                      </a>
                    </li>
                    <li>
                      <a href="#" className="no-underline">
                        Holiday Collection
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className=" no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown('mens')}
            >
              MEN'S
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === 'mens' ? 'block' : 'hidden'
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <ul className="list-none space-y-1">
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Men's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Women's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Perfume
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className=" no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown('womens')}
            >
              WOMEN'S
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === 'womens' ? 'block' : 'hidden'
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <ul className="list-none space-y-1">
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Men's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Women's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Perfume
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="no-underline font-bold relative text-sm md:text-lg text-[#153d4f] hover:underline"
              onClick={() => toggleDropdown('collections')}
            >
              COLLECTIONS
            </a>
            {/* Mega Menu */}
            <div
              className={`${
                activeDropdown === 'collections' ? 'block' : 'hidden'
              } absolute bg-white mt-2 p-4 space-y-2 shadow-md z-20`}
            >
              <ul className="list-none space-y-1 z-20">
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Men's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Women's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="no-underline font-semibold text-lg hover:underline text-[#153d4f] flex justify-between"
                  >
                    Perfume
                  </a>
                </li>
              </ul>
            </div>
          </li>
          {/* Add more menu items here */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



