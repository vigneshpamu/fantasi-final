import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="h-full bg-slate-800 !text-white w-full brder -2 py-10">
      <footer className=" rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/images/logo/logo2.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white da rk:text-white">
                FANTASIES
              </span>
            </Link>
            <ul className="flex flex-col items-start gap-7 mb-6 text-sm font-medium text-white sm:mb-0">
              <div className="flex flex-row">
                <li>
                  <a href="/category" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/events?category=all"
                    className="hover:underline me-4 md:me-6"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="hover:underline me-4 md:me-6"
                  >
                    Contact
                  </a>
                </li>
              </div>
              <div>
                <p>fantasi@gmail.com</p>
                <p>+91 85918 99486</p>
              </div>
              {/* <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li> */}
            </ul>
          </div>
          <hr className="my-6   sm:mx-auto lg:my-8" />
          <span className="block text-sm text-white sm:text-center">
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              fantasi
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
