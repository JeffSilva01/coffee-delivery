'use client'
import { MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export function UserLocation() {
  const [location, setLocation] = useState('')

  useEffect(() => {
    ;(async () => {
      if (!navigator) {
        return
      }

      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const response = await fetch(
          `/api/get-city-user?lat=${latitude}&lon=${longitude}`,
        )

        const { data } = await response.json()

        const { city, state } = data.address

        setLocation(`${city}, ${state}`)
      })
    })()
  }, [])
  return (
    <span className="flex items-center gap-1 rounded bg-secondary-300 p-2 text-sm text-secondary-700">
      <MapPin className="text-secondary-500" />
      {location}
    </span>
  )
}
