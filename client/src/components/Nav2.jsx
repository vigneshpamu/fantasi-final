import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMenu } from 'react-icons/io5'

const Nav2 = ({ currentUser, currentUrl }) => {
  const [showNav, setShowNav] = useState(false)
  const [isAboutHovered, setIsAboutHovered] = useState(false)
  const [isEventsHovered, setIsEventsHovered] = useState(false)
  const [isCoreCommitteeHovered, setIsCoreCommitteeHovered] = useState(false)
  const dispatch = useDispatch()

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart())
      const res = await fetch(`/api/auth/signout`)
      const data = await res.json()
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message))
        return
      }
      dispatch(signOutUserSuccess(data))
    } catch (error) {
      dispatch(signOutUserFailure(error.message))
    }
  }

  return (
    <nav className="bg-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/images/logo/logo2.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FANTASIES
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" label="Home" />
              <div
                className="relative"
                onMouseEnter={() => setIsEventsHovered(true)}
                onMouseLeave={() => setIsEventsHovered(false)}
              >
                <NavLink to="/events?category=all" label="Events" />
                {isEventsHovered && (
                  <div
                    className="absolute top-6 left-0 mt-2 py-3 w-36 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                    onMouseEnter={() => setIsEventsHovered(true)}
                    onMouseLeave={() => setIsEventsHovered(false)}
                  >
                    <NavLink to="/events?category=sports" label="Sports" />
                    <NavLink
                      to="/events?category=performing"
                      label="Performing Arts"
                    />
                    <NavLink to="/events?category=fine" label="Fine Arts" />
                    <NavLink to="/events?category=it" label="IT" />
                    <NavLink to="/events?category=literary" label="Literary" />
                    <NavLink to="/events?category=rhapsody" label="Rhapsody" />
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setIsAboutHovered(true)}
                onMouseLeave={() => setIsAboutHovered(false)}
              >
                <NavLink
                  to="/about"
                  label="About"
                  className="border-2 border-black"
                />
                {isAboutHovered && (
                  <div
                    className="absolute  top-6 left-0 mt-2 py-2 w-36 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    <NavLink to="/core-committee" label="Core Committee" />
                  </div>
                )}
              </div>
              <NavLink to="/contact-us" label="Contact Us" />
            </div>
          </div>
          <div className="flex items-center gap-6 mr-10 sm:mr-0">
            {currentUser ? (
              <div className="relative">
                <Link to={'/profile'}>
                  <div>
                    <img
                      className="rounded-full h-7 w-7 cursor-pointer object-cover"
                      src={currentUser?.avatar}
                      alt="profile"
                    />
                  </div>
                </Link>
              </div>
            ) : currentUrl === 'sign-in' ? (
              <Link to="/sign-up">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign up
                </button>
              </Link>
            ) : (
              <Link to="/sign-in">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
              </Link>
            )}
            <button
              className="text-gray-900 hover:text-gray-700  focus:outline-none focus:text-gray-700 md:hidden"
              onClick={() => setShowNav(!showNav)}
            >
              <IoMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {showNav && (
        <div className="md:hidden mr-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" label="Home" />
            <div
              className="relative"
              onMouseEnter={() => setIsEventsHovered(true)}
              onMouseLeave={() => setIsEventsHovered(false)}
            >
              <NavLink label="Events" />
              {isEventsHovered && (
                <div
                  className="absolute left-0 mt-2 py-2 w-36 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                  onMouseEnter={() => setIsEventsHovered(true)}
                  onMouseLeave={() => setIsEventsHovered(false)}
                >
                  <NavLink to="/events?category=sports" label="Sports" />
                  <NavLink
                    to="/events?category=performing"
                    label="Performing Arts"
                  />
                  <NavLink to="/events?category=fine" label="Fine Arts" />
                  <NavLink to="/events?category=it" label="IT" />
                  <NavLink to="/events?category=literary" label="Literary" />
                  <NavLink to="/events?category=rhapsody" label="Rhapsody" />
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsAboutHovered(true)}
              onMouseLeave={() => setIsAboutHovered(false)}
            >
              <NavLink to="/about" label="About" />
              {isAboutHovered && (
                <div
                  className="absolute left-0 mt-2 py-2 w-36 bg-white border border-gray-200 shadow-lg rounded-md z-10"
                  onMouseEnter={() => setIsAboutHovered(true)}
                  onMouseLeave={() => setIsAboutHovered(false)}
                >
                  <NavLink to="/core-committee" label="Core Committee" />
                </div>
              )}
            </div>
            <NavLink to="/contact-us" label="Contact Us" />
          </div>
        </div>
      )}
    </nav>
  )
}
// Custom NavLink component
const NavLink = ({ to, label }) => (
  <div className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer nav-link">
    <Link to={to}>{label}</Link>
  </div>
)

export default Nav2
