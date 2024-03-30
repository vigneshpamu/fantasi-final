import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'
import CoreCommittee from './pages/CoreCommittee'
import Contact from './pages/Contact'

import Success from './pages/Success'
import Failed from './pages/Failed'
import Upload from './pages/Upload'
import About from './pages/About'
import Events from './pages/Events'
import Form from './pages/Form'
import MyOrders from './pages/MyOrders'
import AdminSignIn from './pages/AdminSignIn'
import AdminSignUp from './pages/AdminSignUp'
import AdminDashboard from './pages/AdminDashboard'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/admin-sign-in" element={<AdminSignIn />} />
        <Route path="/admin-sign-up" element={<AdminSignUp />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/core-committee" element={<CoreCommittee />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route element={<PrivateRoute />}>
          <Route path="/form" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
