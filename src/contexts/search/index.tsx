import { createContext, useState, FC, ReactNode } from "react"
import rawData from "../../../data/events.json"

interface EventItem {
  title: string
  subtitle: string
  site: string
  detail: string
  timestamp: number
}

interface SearchContextProps {
  inputValue: string
  setInputValue: (value: string) => void
  data: EventItem[]
}

interface SearchProviderProps {
  children: ReactNode
}

const eventsData: EventItem[] = rawData.events as EventItem[]

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [dataResults] = useState<EventItem[]>(eventsData)

  const filteredData = () => {
    if (inputValue === "") {
      return dataResults
    }
    return dataResults.filter((data) =>
      data.title.toLowerCase().includes(inputValue.toLowerCase())
    )
  }

  return (
    <SearchContext.Provider
      value={{ inputValue, setInputValue, data: filteredData() }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext
