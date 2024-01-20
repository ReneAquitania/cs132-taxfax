import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../images/hero.png';

export default function Home() {
  return (
    <div className="flex items-center">
        <img className="max-w-4xl" src={hero} alt="" />
        <div className="px-16">
            <h1 className="text-5xl mb-8 font-bold">
                In March 9, 1999, the Supreme Court ordered the Marcos heirs to 
                pay the estate tax of P23 billion pesos. As of 2023, they still have not paid it, 
                and people have a lot to say about it.
            </h1>
            <Link 
                className=" bg-taxfaxred-300 font-bold px-8 py-3 text-white rounded-full "
                to="/cs132-taxfax/overview">
                  Read More
              </Link>
        </div>
    </div>
  )
}
