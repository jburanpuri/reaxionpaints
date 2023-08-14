import React from "react";
import Link from 'next/link'

export default function Footer() {
    return (
<div>
  <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-gradient-to-b from-gray-900 to-black">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap text-left lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
          <h4 className="text-xl fonat-semibold text-white">Any feedback or questions? Email Us!</h4>
          <h5 className="text-lg mt-0 mb-2 text-white py-3">
            We respond within 1-2 business days.
          </h5>
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
              <span className="block uppercase text-white text-lg font-semibold mb-2">Useful Links</span>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-white font-semibold block pb-2 text-normal" href="/">Home</Link>
                </li>
                <li>
                  <Link className="text-white font-semibold block pb-2 text-normal" href="/about">About Us</Link>
                </li>
                <li>
                  <Link className="text-white font-semibold block pb-2 text-normal" href="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-white" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div className="text-normal text-white font-semibold py-1">
            Copyright © <span id="get-current-year">2023 </span><Link href="/" className="text-white hover:text-primary"></Link><Link href="/" className="text-white hover:text-primary">REAXION PAINTS</Link>.
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
)};
