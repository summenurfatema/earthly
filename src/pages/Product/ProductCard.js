import React from 'react';
import { FaStar } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ newProduct }) => {
    const { name, img, price } = newProduct;

    return (
        <div className="group cursor-pointer  rounded-md overflow-hidden border-2">
            <div>
                <img className='w-full h-80 md:h-96 lg:h-60' src={img} alt="" />
            </div>
            <div>
                <small className='flex space-x-1 text-yellow-500 px-2 py-2'><FaStar />
                    <FaStar  /><FaStar /><FaStar /><FaStar /></small>
                <small className='px-2'>{name}</small>

                <p className=" text-brown text-base pt-1 font-bold px-2">৳{price}</p>
                <button className="px-10 py-2 hover:bg-[#2866D7] hover:text-white bg-brown mx-auto w-full transition-all rounded-sm duration-300">
                    <GiShoppingCart className="inline mr-2"></GiShoppingCart>
                    Buy Now
                </button>
            </div>
            <div className="absolute right-2 top-10 flex flex-col gap-y-2 translate-x-14 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 origin-left transition duration-500">
                <div className="w-10 h-10 rounded-full hover:scale-110 flex items-center justify-center bg-white">
                    <AiOutlineHeart className="hover:scale-x-110"></AiOutlineHeart>
                </div>
                <div className="w-10 h-10 rounded-full hover:scale-110 flex items-center justify-center bg-white">
                    <GiShoppingCart className="hover:scale-x-110"></GiShoppingCart>
                </div>
            </div>
        </div>



    );
};

export default ProductCard;