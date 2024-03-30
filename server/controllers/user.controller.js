import OrderModel from '../models/order.model.js'
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js'
import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'

export const test = (req, res) => {
  res.json({
    message: 'API route is Working',
  })
}

export const updateUser = async (req, res, next) => {
  // if (req.user.id !== req.params.id)
  //   return next(errorHandler(401, 'You can only update your own account!'))
  try {
    // if (req.body.password) {
    //   req.body.password = bcryptjs.hashSync(req.body.password, 10)
    // }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    )

    const { password, ...rest } = updatedUser._doc

    res.status(200).json(rest)
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only update your own account!'))
  try {
    await User.findByIdAndDelete(req.params.id)
    res.clearCookie('access_token')
    res.status(200).json('User Deleted Successfully')
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) return next(errorHandler(404, 'User Not Found'))

    const { password: pass, ...rest } = user._doc

    res.status(200).json(rest)
  } catch (error) {
    next(error)
  }
}

export const upload = async (req, res, next) => {
  try {
    const { id, address, imageUrls1, imageUrls2, phone } = req.body
    console.log(id)
    const updatedDocument = await User.findByIdAndUpdate(
      id,
      {
        address,
        phone: phone,
        aadharUrl: imageUrls1[0],
        drivingLicenseUrl: imageUrls2[0],
      },
      { new: true } // To return the updated document
    )
    console.log('Updated document:', updatedDocument)

    res.status(200).json(updatedDocument)
  } catch (error) {
    next(error)
  }
}

export const sendEmail = async (req, res, next) => {
  // const transporter = nodemailer.createTransport({
  //   server: 'gmail',
  //   host: 'smtp.gmail.net',
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //     user: 'vigneshpamu2002@gmail.com',
  //     pass: 'xpnj myir lvcn aycz',
  //   },
  // })
  try {
    const { email, order_id } = req.body
    // var message = {
    //   from: {
    //     name: 'Vigi',
    //     address: 'Mumbai',
    //   },
    //   to: `vigneshpamu2005@gmail.com`,
    //   subject: 'Your Order is Placed Successfully',
    //   text: 'Download the PDF now',
    // }
    // const info = await transporter.sendMail(message)
    // console.log(transporter)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mailtofantasi@gmail.com',
        pass: 'kjnlxmzkqspgzati ',
      },
    })
    const link = `http://localhost:3006/success?order_id=${order_id}`

    //2.configure email content.
    const mailOptions = {
      from: 'mailtofantasi@gmail.com',
      to: email,
      subject: 'Your Order is Placed Successfully',
      text: 'This is an email using nodemail in nodejs',
      html: `<div style="">
    <p>Download your Order recipt </p>
    
<a href=${link}>
  <button style="background-color: #3399ff; padding: 10px; font-size:24px;color: white;">Download
  </button>
</a>
    </div>`,
    }

    //3. send email
    try {
      const result = await transporter.sendMail(mailOptions)
      console.log('Eamil sent successfully')
    } catch (error) {
      console.log('Email send failed with error:', error)
    }
    // console.log(id)
    // const updatedDocument = await User.findByIdAndUpdate(
    //   id,
    //   {
    //     address,
    //     phone: phone,
    //     aadharUrl: imageUrls1[0],
    //     drivingLicenseUrl: imageUrls2[0],
    //   },
    //   { new: true } // To return the updated document
    // )
    // console.log('Updated document:', updatedDocument)

    res.status(200).json({})
  } catch (error) {
    // next(error)
  }
}

export const getMyOrders = async (req, res, next) => {
  try {
    const { id } = req.body
    console.log(id)
    const myOrders = await OrderModel.find({ user: id })

    res.status(200).json(myOrders)
  } catch (error) {
    next(error)
  }
}

export const getAllOrdersWithUserDetails = async (req, res) => {
  try {
    const orders = await OrderModel.find().populate('user').exec()
    res.status(200).json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    res
      .status(500)
      .json({ message: 'Failed to fetch orders', error: error.message })
  }
}

export const requestRefund = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mailtofantasi@gmail.com',
      pass: 'kjnlxmzkqspgzati ',
    },
  })

  //2.configure email content.

  try {
    const { id } = req.body
    const updatedDocument = await OrderModel.findByIdAndUpdate(
      id,
      { $set: { isRefund: true } },
      { new: true }
    )
    const orders = await OrderModel.find().populate('user').exec()
    const user = await User.findById(updatedDocument.user)
    const mailOptions = {
      from: 'mailtofantasi@gmail.com',
      to: 'mailtofantasi@gmail.com',
      subject: 'Refund Requested By User',
      text: 'This is an email using nodemail in nodejs',
      html: `<div style="">
    <p>Name: ${user.name} </p>
    <p>Email: ${user.email} </p>
    <p>Order Id: ${updatedDocument._id} </p>
    
    </div>`,
    }
    const result = await transporter.sendMail(mailOptions)
    console.log('Refund Email sent successfully')
    res.status(200).json({ orders, user })
  } catch (error) {
    console.error('Error fetching orders:', error)
    res
      .status(500)
      .json({ message: 'Failed to fetch orders', error: error.message })
  }
}
