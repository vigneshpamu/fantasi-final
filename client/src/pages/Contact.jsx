import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    const mailtoLink = `mailto:vvasani812@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0AMessage:%20${message}`
    window.location.href = mailtoLink
  }

  return (
    <div className="container mx-auto h-[80vh] mt-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>Email: fantasies@ce.sies.edu.in</p>
          <p>Phone: (91) (22) 24074944</p>
          <p>
            Address: Plot No.71, 72, TV Chidambaran Marg, Air Force Quarters,
            Sion, Near Champaklal Industries, Mumbai, Maharashtra 400022, INDIA
          </p>
          <div className="mt-4">
            <p>Follow us on social media:</p>
            <div className="flex items-center mt-2">
              <a
                href="https://www.twitter.com/Fantasies_Fest"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaTwitter className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://www.facebook.com/FantasiesFest/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://www.instagram.com/fantasiesfest/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaInstagram className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://www.youtube.com/FantasiesChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
              >
                <FaYoutube className="w-6 h-6 text-blue-500 hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-2">Send us a Message</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
