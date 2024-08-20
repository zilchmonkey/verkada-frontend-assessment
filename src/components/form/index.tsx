import { useContext, FC, ChangeEvent } from "react"
import SearchContext from "../../contexts/search"
import icon from "./img/Icon_Search.svg"

const Form: FC = () => {
  const context = useContext(SearchContext)

  if (!context) {
    throw new Error("SearchContext must be used within a SearchProvider")
  }

  const { inputValue, setInputValue } = context

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <form className={`border-b w-full flex justify-center p-4`}>
      <input
        value={inputValue}
        onChange={handleChange}
        placeholder="Search Events..."
        type="text"
        className={`max-w-4xl w-full px-8 pl-14 bg-[url('${icon}')] bg-no-repeat bg-[2rem_0.35rem] text-verkadaGray`}
      />
    </form>
  )
}

export default Form
