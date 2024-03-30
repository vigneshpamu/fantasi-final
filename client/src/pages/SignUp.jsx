/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import { useSelector, useDispatch } from 'react-redux'
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice'

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user)
  const { currentUser } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newFData = { ...formData, role: 'user' }
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFData),
      })
      const data = await res.json()
      console.log(data)
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data))
      navigate(`/`)
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }
  console.log(formData)
  return (
    <div className="bg-slate-900 py-10 h-[100vh]">
      <div className="p-8 px-8 border-2 border-gray-200 bg-white mt-16 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold mb-7">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? 'Loading' : 'Sign Up'}
          </button>
          <OAuth />
          <div className="flex gap-2 mt-5">
            <p>Have an Admin Account?</p>
            <Link to={'/admin-sign-in'}>
              <span className="text-blue-700">Admin Sign In</span>
            </Link>
          </div>
          <div className="flex gap-2 mt-5">
            <p>Have an Account?</p>
            <Link to={'/sign-in'}>
              <span className="text-blue-700">Sign In</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default SignUp
