import React from 'react';
import logo from './images/taxfax-logo.png';

const Footer = () => {
  return (
    <div className="bg-[#2d2d2d] flex flex-col min-w-full">
        <div className="flex h-8 md:h-16 bg-white rounded-b-full">
        </div>
        <div className="py-8 md:flex md:flex-1 max-md:px-6 gap-x-10 text-white justify-center">
            <div className="flex max-md:justify-center">
                <img src={logo} className="h-20" alt="TaxFax logo" />
                <div className="ml-3">
                    <p className="text-2xl font-extrabold">TaxFax</p>
                    <p className="text-gray-500 text-xs">Short description about the project.<br /> CS 132 Class Project AY 2022-2023</p>
                </div>
            </div>
            <div className="flex gap-x-10 max-md:mt-3 justify-between">
                <div>
                    <p className="font-extrabold text-xl">Links</p>
                    <p className="text-sm text-gray-500">Privacy Policy</p>
                    <p className="text-sm text-gray-500">About Us</p>
                    <p className="text-sm text-gray-500">References</p>
                </div>
                <div>
                    <button className="py-2 px-5 rounded-full bg-taxfaxred-300 text-white text-xl font-extrabold">Contact Us</button>
                    <p className="text-xs text-gray-500">(C) Something. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;