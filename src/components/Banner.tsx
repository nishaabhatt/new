import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex flex-col md:flex-row gap-4 border-b-[1px]">
        <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">

        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image src="/banner2.avif" height={900} width={800} alt='' priority 
            className="w-full h-[410px] object-cover rounded-lg"/>
            <div className="absolute w-30 md:w-40 lg:w-60 h-full top-0 left-4 flex flex-col gap-3 text-white">
                <p>Trending Item</p>
                <h1 className="font-bold text-xl md:text-2xl lg:text-4xl">WOMEN LATEST FASHION SALE</h1>
                <p>Starting at $14</p>
                <button>Shop Now</button>
            </div>
          </div>
        </Slider>

        </div>
        <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow
        p-4 flex flex-col justify-between "></div>
    </div>
  )
}

export default Banner