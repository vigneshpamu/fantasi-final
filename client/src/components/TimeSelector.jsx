import React, { useState } from 'react'

const TimeSelector = ({ setStartTime, startTime }) => {
  const [selectedHour, setSelectedHour] = useState(startTime?.hour)
  const [selectedMinute, setSelectedMinute] = useState(startTime?.minute)
  const [selectedAmPm, setSelectedAmPm] = useState(startTime?.day)

  const handleHourChange = (e) => {
    setSelectedHour(e.target.value)
    setStartTime({ ...startTime, hour: e.target.value })
  }

  const handleMinuteChange = (e) => {
    setSelectedMinute(e.target.value)
    setStartTime({ ...startTime, minute: e.target.value })
  }

  const handleAmPmChange = (e) => {
    setSelectedAmPm(e.target.value)
    setStartTime({ ...startTime, day: e.target.value })
  }
  return (
    <div className="flex justify-center items-center">
      <select
        value={selectedHour}
        onChange={handleHourChange}
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
      >
        {[...Array(12).keys()].map((hour) => (
          <option
            key={hour + 1}
            value={hour < 9 ? `0${hour + 1}` : `${hour + 1}`}
          >
            {hour < 9 ? `0${hour + 1}` : `${hour + 1}`}
          </option>
        ))}
      </select>
      <span className="-2">:</span>
      <select
        value={selectedMinute}
        onChange={handleMinuteChange}
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
      >
        {[...Array(60).keys()].map((minute) => (
          <option key={minute} value={minute < 10 ? `0${minute}` : `${minute}`}>
            {minute < 10 ? `0${minute}` : `${minute}`}
          </option>
        ))}
      </select>
      <select
        value={selectedAmPm}
        onChange={handleAmPmChange}
        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  )
}

export default TimeSelector
