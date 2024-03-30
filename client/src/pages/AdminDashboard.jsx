import { toast } from '@/components/ui/use-toast'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts'
import { events } from '@/data/eventsData'
import { useSelector } from 'react-redux'
import { Link, redirect, useNavigate } from 'react-router-dom'
const AdminDashboard = () => {
  let navigate = useNavigate()

  const { currentUser } = useSelector((state) => state.user)
  console.log(currentUser)
  function sortByCreatedAtDescending(data) {
    return data.sort((a, b) => {
      const dateA = new Date(a.createdAt)
      const dateB = new Date(b.createdAt)
      return dateB - dateA // Sort in descending order
    })
  }

  function getUserFrequency(data) {
    let userMap = {}

    // Count the occurrences of each user
    data.forEach((item) => {
      const userName = item.user.name
      userMap[userName] = (userMap[userName] || 0) + 1
    })

    // Extract unique users and their frequencies
    const uniqueUsers = Object.keys(userMap)
    const frequencies = Object.values(userMap)

    return [uniqueUsers, frequencies]
  }

  // Example usage:
  const allCategories = [
    [
      'Fine Arts',
      'Literary Arts',
      'I.T',
      'Performing Arts',
      'Rhapsody',
      'Sports',
    ],
  ]

  function getCategoryCounts(orders, eventsData) {
    const categoryCounts = {}

    // Iterate over the orders array
    orders.forEach((order) => {
      // Find the corresponding event in eventsData based on eventName
      const event = eventsData.find((event) => event.eventName === order.name)
      if (event) {
        // Increment the count for the category found in the event
        if (categoryCounts[event.category]) {
          categoryCounts[event.category]++
        } else {
          categoryCounts[event.category] = 1
        }
      }
    })

    // Extract unique categories and counts into separate arrays
    const categories = Object.keys(categoryCounts)
    const counts = Object.values(categoryCounts)

    return [categories, counts]
  }

  function addCategoryToOrders(orders, eventsData) {
    // Iterate over orders array
    for (const order of orders) {
      // Find the corresponding event in eventsData array
      const matchingEvent = eventsData.find(
        (event) => event.eventName === order.name
      )

      // If a matching event is found, assign its category to the order's category key
      if (matchingEvent) {
        order.category = matchingEvent.category
      }
    }

    // Return the updated orders array
    return orders
  }

  function mergeArraysIntoObject(arr1, arr2) {
    const mergedArray = []

    // Iterate over both arrays simultaneously
    for (let i = 0; i < arr1.length; i++) {
      // Create an object with the desired structure
      const obj = {
        id: i,
        value: arr2[i],
        label: arr1[i],
      }
      // Push the object to the merged array
      mergedArray.push(obj)
    }

    return mergedArray
  }
  const [pieData, setPieData] = useState({ name: ['a'], times: ['5'] })
  const [chartData, setChartData] = useState([])
  const [allOrders, setAllOrders] = useState([])
  const url = `http://localhost:3003/api/user/admin-all-orders`

  useEffect(() => {
    if (currentUser?.role !== 'admin') {
      console.log('Yes')
      navigate('/admin-sign-in')
    }
  }, [])

  const fetchData = async () => {
    const { data } = await axios.get(url)
    const mainData = addCategoryToOrders(data, events)
    const sortedData = sortByCreatedAtDescending(mainData)
    setAllOrders(sortedData)
    console.log(sortedData)
    const [uniqueUsers, frequencies] = getUserFrequency(data)

    const [categories, counts] = getCategoryCounts(sortedData, events)

    const result = mergeArraysIntoObject(categories, counts)

    setPieData({ ...pieData, name: uniqueUsers, times: frequencies })
    setChartData(result)
  }
  function formatDate(dateString) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const date = new Date(dateString)
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="py-10 ">
      <div className="flex flex-col items-center  w-full mx-auto gap-5">
        <p className="text-2xl mb-10 font-bold mx-auto">Admin Dashboard</p>
        <div>
          <div className="w-[550px] max-h-[40 0px] px-6 py-3 overflow-y-scrol l">
            {allOrders.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between  w-full  gap-3 p-2"
                >
                  <div className="flex flex-row gap-3 items-center">
                    <img
                      src={item.user.avatar}
                      alt=""
                      className="h-28 w-28 rounded-md object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <p>
                        <span className="font-bold">Event Name: </span>{' '}
                        {item.name}
                      </p>
                      <p>
                        <span className="font-bold">User Name: </span>{' '}
                        {item.user.name}
                      </p>
                      <p>
                        <span className="font-bold">Category: </span>{' '}
                        {item.category}
                      </p>
                      <p>
                        <span className="font-bold">Date: </span>{' '}
                        {formatDate(item.createdAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <div>
                      <p className="text-2xl text-blue-500">
                        {' '}
                        {item.amount / 100} ₹
                      </p>
                      <p>Amount</p>
                    </div>
                    <p className="py-1 text-sm px-5 rounded-lg text-white bg-green-400">
                      Paid
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <p className="my-10 text-2xl font-bold">Statistics</p>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p>User Data</p>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: pieData?.name,
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: pieData?.times,
                },
              ]}
              width={400}
              height={300}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="mb-10">Category Data</p>
            <PieChart
              series={[
                {
                  data: chartData,
                },
              ]}
              width={450}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
