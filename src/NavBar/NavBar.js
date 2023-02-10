import { useState } from "react";
import {  BsJustify } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiPhone } from 'react-icons/bi'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'




const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
          
            <div>
                <div class="bg-blue-500 sticky top-0 mb:5 lg:mb-10">
                    <div class="px-4 -py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div class="relative flex  items-center justify-between">

                            <div>
                                <MdAddShoppingCart className="text-2xl lg:hidden text-white" />
                            </div>

                            <a
                                href="/"
                                className="inline-flex items-center"
                            >
                                <img src={logo} className='h-14 w-16 md:h-20 md:w-20 lg:w-36 lg:h-24 lg:-ml-32' alt='logo' />

                                <span class=" text-xl lg:text-2xl font-bold text-white -ml-4">
                                   Earthly
                                </span>
                            </a>
                       

                            <ul class="flex items-center hidden space-x-4 lg:flex">
                               
                            <li>
                                    <Link
                                        to="/"
                                        className="font-2xl tracking-wide text-gray-100 uppercase font-bold"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"

                                        className="font-2xl tracking-wide text-gray-100 uppercase font-bold"
                                    >
                                      Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"

                                        className="font-2xl tracking-wide text-gray-100 uppercase font-bold"
                                    >
                                      Get in touch
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"

                                        className="font-2xl tracking-wide text-gray-100 uppercase font-bold"
                                    >
                                        <MdAddShoppingCart className="text-2xl"/>
                                    </Link>
                                </li>
                                <li>
                                <button class="p-2 pl-5 pr-5 border-2 border-indigo-500 bg-white text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300">Login</button>
                                </li>



                            </ul>




                            <div class="lg:hidden">
                                <button

                                    className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => setIsMenuOpen(true)}
                                >
                                    <BsJustify className="text-2xl text-white" />
                                </button>


                                {isMenuOpen && (
                                    <div class="transform top-0 left-0 w-72 bg-blue-500 fixed h-full overflow-auto ease-in-out transition-all duration-1000">
                                        <div class="p-5 border rounded shadow-sm">
                                            <div class="flex items-center justify-between mb-4">
                                                <div>
                                                    <a
                                                        href="/"

                                                        class="inline-flex items-center"
                                                    >
                                                        <img src={logo} className='h-14 w-14' alt='logo' />
                                                        <span class="-ml-2 text-xl font-bold  text-white">
                                                           Earthly
                                                        </span>
                                                    </a>
                                                </div>
                                                <div>
                                                    <button

                                                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        <AiOutlineCloseCircle className="text-2xl text-white" />
                                                    </button>
                                                </div>
                                            </div>
                                            <nav>
                                                <ul class="space-y-4">
                                                    
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="text-xl text-white font-bold"
                                                        >
                                                          Home
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="text-xl text-white font-bold"
                                                        >
                                                          Shop
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="text-xl text-white font-bold"
                                                        >
                                                        Get in touch
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to="/"

                                                            className="text-xl text-white font-bold"
                                                        >
                                                           Login
                                                        </Link>
                                                    </li>
                                                   
                                             

                                                    <li>
                                                        <p className='text-xl text-white'><BiPhone className='inline-block' /> Help line +353 1552 4908</p>

                                                    </li>


                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NavBar;