import { Logo } from "@/components/icons";
import React from "react";
const Content = () => {
    return (
      <>
        <footer className="bg-white">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                    <div className="text-teal-600">
                    <Logo />
                    </div>
                    <p className="font-bold pt-2">
                        UI PIRATES
                    </p>

                    <ul className="mt-8 flex gap-6 pl-2">
                    <li>
                        <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                        >
                        <span className="sr-only">Facebook</span>

                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                            />
                        </svg>
                        </a>
                    </li>

                    
                    <li>
                        <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                        >
                        <span className="sr-only">Twitter</span>

                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                            />
                        </svg>
                        </a>
                    </li>

                    

                   
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                    <div>
                    <p className="font-medium text-gray-900">About Us</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Mission</a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75">  Our Team</a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Awards </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Testimonials</a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Privacy Policy </a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <p className="font-medium text-gray-900">Services</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Web Design </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Web Development </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Mobile Design </a>
                        </li>
                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> UI/UX Design </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Branding Design </a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <p className="font-medium text-gray-900">Portfolio</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Coorporate Website </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> E-Commerce </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Mobile Apps </a>
                        </li>
                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Landing Pages </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> UI/UX Projects </a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <p className="font-medium text-gray-900">Contact Us</p>

                    <ul className="mt-6 space-y-4 text-sm">
                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Information </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Request a quote </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Consultation </a>
                        </li>

                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Help Center </a>
                        </li>
                        <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75"> Terms and Conditions </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <hr></hr>
                <p className="text-xs text-gray-500 text-center ">Copyright © 2024 UI Pirates     |     All Rights Reserved     |     Terms and Conditions     |     Privacy Policy</p>
            </div>
            </footer>
        <hr></hr>
       
        
      </>
    );
  };
  
  export default Content;
  