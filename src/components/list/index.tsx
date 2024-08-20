import { Fragment, FC, useContext } from "react"
import SearchContext from "../../contexts/search"
import { event1, event2, event3 } from "./img"
import useFormattedTime from "../../hooks/useFormattedTime"

interface TimeDisplayProps {
  timestamp: number
}

const eventImages = [event1, event2, event3]

const TimeDisplay: FC<TimeDisplayProps> = ({ timestamp }) => {
  const formattedTime = useFormattedTime(timestamp)

  return formattedTime
}

const List = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error("SearchContext must be used within a SearchProvider")
  }

  const { data } = context

  return (
    <div className="grid gap-y-2 gap-x-4 grid-cols-3 pt-4 items-stretch px-8 max-w-4xl w-full relative">
      {data.map((list, index) => {
        return (
          <Fragment key={index}>
            <div
              className={`flex gap-x-2 relative after:content-[' '] after:absolute after:bottom-0 after:border-b after:left-[5.5rem] after:-right-[calc(185%+5.5rem)]`}
            >
              <img
                className={`object-cover w-20 min-w-20 h-14 rounded-md`}
                src={eventImages[index]}
              />
              <div className={`justify-center flex-col flex`}>
                <p className={`text-sm font-semibold text-6 text-midnight`}>
                  {list.title}
                </p>
                <p className={`text-xs`}>{list.subtitle}</p>
              </div>
            </div>
            <div className={`flex justify-center flex-col`}>
              <p className={`text-sm`}>{list.detail}</p>
            </div>
            <div className={`flex flex-col justify-center items-end`}>
              <p>
                <TimeDisplay timestamp={list.timestamp} />
              </p>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

export default List
