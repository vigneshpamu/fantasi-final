import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Welcome to Fantasies
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <img
              src="/images/hero/bg/hero.png"
              alt="Fantasies Festival"
              className="rounded-lg shadow-lg w-full h-full"
            />
          </div>
          <div className="md:order-1">
            <p className="text-lg text-gray-700 leading-relaxed">
              Fantasies is an annual festival held at SIES College, aimed at
              celebrating creativity, innovation, and community spirit. It's not
              just an events page; it's a journey into the realm of imagination,
              where students come together to bring their wildest dreams to
              life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Our mission is to ignite passion, foster creativity, and build a
              sense of community through a diverse range of events and
              activities. From exhilarating talent shows to thought-provoking
              panel discussions, from adrenaline-pumping sports tournaments to
              captivating art exhibitions, Fantasies offers something for
              everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you're an artist, an athlete, a performer, or simply
              someone who loves to have fun, Fantasies welcomes you with open
              arms. Join us in this celebration of talent, creativity, and
              camaraderie!
            </p>

            <div className="flex flex-row gap-5">
              <div className="mt-8 text-center">
                <Link
                  to="/core-committee"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Core Committee
                </Link>
              </div>
              <div className="mt-8 text-center">
                <Link
                  to="/events"
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Explore Events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
