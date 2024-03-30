import { events } from '@/data/eventsData'
import React, { useEffect, useState } from 'react'
import { IoMdPeople, IoMdSearch } from 'react-icons/io'
import { Skeleton } from '@/components/ui/skeleton'
import { GiDuration } from 'react-icons/gi'
import { BiCategory } from 'react-icons/bi'
import { MdCurrencyRupee } from 'react-icons/md'
import { Link, useLocation, useParams } from 'react-router-dom'
const Events = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState()
  const [myResult, setMyResult] = useState()
  const params = useParams()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const category = searchParams.get('category')
  const name = searchParams.get('name')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    const results = myResult.filter(
      (item) =>
        item.category.toLowerCase().includes(value.toLowerCase()) ||
        item.eventName.toLowerCase().includes(value.toLowerCase())
    )

    setSearchResults(results)
  }

  useEffect(() => {
    // const searchParams = new URLSearchParams(location.search)
    // const category = searchParams.get('category')
    // const name = searchParams.get('name')
    // let categoryM
    let value

    if (category === 'sports') {
      value = 'Sports'
    } else if (category === 'performing') {
      value = 'Performing Arts'
    } else if (category === 'fine') {
      value = 'Fine Arts'
    } else if (category === 'it') {
      value = 'I.T'
    } else if (category === 'literary') {
      value = 'Literary Arts'
    } else if (category === 'rhapsody') {
      value = 'Rhapsody'
    }

    if (category === 'all') {
      setSearchResults(events)
      setMyResult(events)
    } else {
      const results = events.filter((item) =>
        item.category.toLowerCase().includes(value?.toLowerCase())
      )
      setSearchResults(results)
      setMyResult(results)
    }

    // console.log(results)
  }, [searchParams.get('category')])
  return (
    <div
      className="mt- 16 min-h-[100vh] w-[100vw] bg-slate-900 bg-cover bg-center"
      style={{ backgroundImage: `url('/images/hero/bg/hero.jpg')` }}
    >
      {/* Search Bar */}
      <div className="max-w-[1200px] text-white mx-auto py-5">
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Search Events"
            className="p-3 text-black w-full rounded-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          <IoMdSearch className="absolute right-4 top-2 text-red-500 text-3xl" />
        </div>

        {/* Filter & Events */}
        <div className="flex flex-row items-start mt-16 justify-center">
          {/* Filter */}
          <div></div>
          {/* Events */}
          <div className="flex flex-col gap-5">
            {searchResults &&
              searchResults?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="max-w-sm w-full lg:min-w-[930px] lg:flex"
                  >
                    <div
                      className="h-48 lg:h-60 min-w-[400px] lg: w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                      title="Woman holding a mug"
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                      <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                          Event Name
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">
                          {item.eventName}
                        </div>
                        <p className="text-gray-700 text-base">{item.desc}</p>
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-black flex items-center justify-center flex-row gap-1">
                            <IoMdPeople className="text-xl" />
                            <p className="text-lg font-semibold">
                              {item.noOfParticipant}
                            </p>
                          </div>
                          {/* Duration  */}
                          <div className="text-black flex items-center justify-center flex-row gap-1">
                            <GiDuration className="text-xl" />
                            <p className="text-lg truncate max-w-[100px] font-semibold">
                              {item.duration} hr
                            </p>
                          </div>
                          {/* Category  */}
                          <div className="text-black flex items-center justify-center flex-row gap-1">
                            <BiCategory className="text-xl" />
                            <p className="text-lg font-semibold truncate max-w-[100px]">
                              {item.category}
                            </p>
                          </div>
                          {/* Amount  */}
                          <div className="text-black flex items-center justify-center flex-row gap-1">
                            <MdCurrencyRupee className="text-xl" />
                            <p className="text-lg font-semibold">
                              {item.amount}
                            </p>
                          </div>
                        </div>
                        <Link
                          to={`/form?category=${item.category}&name=${item.eventName}`}
                        >
                          <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                          >
                            Register Now
                          </button>
                        </Link>
                      </div>
                      {/* Stars  */}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
