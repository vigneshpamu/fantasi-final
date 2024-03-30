import { useToast } from '@/components/ui/use-toast'
import { events } from '@/data/eventsData'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const MyOrders = () => {
  const { currentUser } = useSelector((state) => state.user)
  const [myEvents, setMyEvents] = useState()
  const [allData, setAllData] = useState()
  const { toast } = useToast()

  function filterObjectsById(arr1, arr2) {
    return arr2.filter((obj2) => {
      return arr1.some((obj1) => obj1.name === obj2.eventName)
    })
  }

  const getOrders = async () => {
    const { data } = await axios.post(
      'http://localhost:3003/api/user/myordersnew',
      {
        id: currentUser._id,
      }
    )

    setAllData(data)

    const newData = filterObjectsById(data, events)
    // console.log(data, newData)
    setMyEvents(newData)
  }

  const HandleRefund = async (id) => {
    const { data } = await axios.post(
      'http://localhost:3003/api/user/request-refund',
      {
        id: id,
      }
    )
    getOrders()
    toast({
      title: 'Refund Requested Successfully',
      variant: 'success',
    })
    console.log(data)
  }

  const HandleRefund2 = async (id) => {
    toast({
      title: 'Already Refund Requested',
      variant: 'success',
    })
  }

  useEffect(() => {
    getOrders()
  }, [])
  return (
    <div className="py-10 flex flex-col items-center  justify-center">
      <p className="text-3xl font-bold">My Registered Events</p>
      <div className="w-[700px] h-[100vh] flex flex-col gap-5 mt-10 mx-auto">
        {myEvents?.map((item, index) => {
          return (
            <div
              key={item.id}
              className="p-2 flex flex-row justify-between border gap-5"
            >
              <div className=" flex flex-row items-center gap-5">
                <img
                  src={item.img}
                  alt=""
                  className="h-28 w-28 rounded-md object-cover"
                />
                <div>
                  <p>
                    <span className="font-bold">Name: </span>
                    {item.eventName}
                  </p>
                  <p>
                    <span className="font-bold">Category: </span>{' '}
                    {item.category}
                  </p>
                  <p>
                    <span className="font-bold">Duration: </span>{' '}
                    {item.duration} hr
                  </p>
                  <p>
                    <span className="font-bold">No of Participation: </span>{' '}
                    {item.noOfParticipant} hr
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-center pr-5 bor der-2">
                <div>
                  <p className="text-2xl text-blue-600 font-bold">
                    {item.amount} ₹
                  </p>
                  <p>Amount</p>
                </div>
                {allData[index].isRefund ? (
                  <div onClick={() => HandleRefund2()}>
                    <p className="text-md p-2 bg-red-600 rounded-md w-[180px] text-center hover:bg-red-500 cursor-pointer text-white font-bold">
                      Refund Processing
                    </p>
                  </div>
                ) : (
                  <div onClick={() => HandleRefund(allData[index]._id)}>
                    <p className="text-md p-2 bg-blue-600 rounded-md w-[180px] text-center hover:bg-blue-500 cursor-pointer text-white font-bold">
                      Request Refund
                    </p>
                  </div>
                )}
                {/* {item.isRefund && (
                  <div>
                    <p className="text-md p-2 bg-red-600 rounded-md hover:bg-red-500 cursor-pointer text-white font-bold">
                      Request Refund
                    </p>
                  </div>
                )} */}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
