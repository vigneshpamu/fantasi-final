/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice'
import OAuth from '../components/OAuth'
const SignIn = () => {
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      console.log(data)
      if (data.success === false) {
        dispatch(signInFailure(data.message))
        return
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  }
  console.log(formData)
  return (
    <div className="bg-slate-900 py-10 h-[100vh]">
      <div className="p-8 px-8 border-2 border-gray-200 bg-white mt-20 max-w-lg mx-auto">
        <h1 className="text-3xl text-center font-semibold mb-7">Sign In</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
            id="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="password"
            className="border p-3 rounded-lg"
            id="password"
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? 'Loading' : 'Sign In'}
          </button>
          <OAuth />
          <div className="flex gap-2 mt-5">
            <p>Don't have an Admin Account?</p>
            <Link to={'/admin-sign-up'}>
              <span className="text-blue-700">Admin Sign Up</span>
            </Link>
          </div>
          <div className="flex gap-2 mt-5">
            <p>Dont have an account?</p>
            <Link to={'/sign-up'}>
              <span className="text-blue-700">Sign Up</span>
            </Link>
          </div>
          {error && <p className="text-red-500 mt-5">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default SignIn
