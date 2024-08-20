import { useMemo } from "react"

const useFormattedTime = (timestamp: number) => {
  return useMemo(() => {
    if (!timestamp) return 0

    const date = new Date(timestamp * 1000)
    let hours: number = date.getHours()
    const minutes: number = date.getMinutes()

    const ampm = hours >= 12 ? "pm" : "am"
    hours = hours % 12 || 12
    const formattedMinutes = String(minutes).padStart(2, "0")

    return `${hours}:${formattedMinutes}${ampm}`
  }, [timestamp])
}

export default useFormattedTime
